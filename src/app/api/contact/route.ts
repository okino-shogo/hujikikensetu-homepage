import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // フォームデータの検証
    const {
      name,
      email,
      phone,
      company,
      projectType,
      location,
      budget,
      timeline,
      message,
      formType,
      // 採用関連フィールド
      age,
      experience,
      qualification,
      motivation
    } = body;

    // 必須フィールドの検証
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'お名前、メールアドレス、メッセージは必須項目です。' },
        { status: 400 }
      );
    }

    // Nodemailerの設定（ワクワクメール用）
    const transporter = nodemailer.createTransport({
      host: 'smtp.wakwak.ne.jp',
      port: 587,
      secure: false, // STARTTLS
      auth: {
        user: process.env.WAKWAK_USER,
        pass: process.env.WAKWAK_PASSWORD
      }
    });

    // メール本文の作成
    let emailContent = `
藤喜建設ホームページより新しいお問い合わせが届きました。

【お問い合わせ種別】
${formType === 'construction' ? '工事に関するお問い合わせ' : '採用に関するお問い合わせ'}

【基本情報】
お名前: ${name}
メールアドレス: ${email}
電話番号: ${phone || '未入力'}
会社名・所属: ${company || '未入力'}

`;

    if (formType === 'construction') {
      emailContent += `
【工事詳細】
工事種別: ${projectType || '未入力'}
工事場所: ${location || '未入力'}
予算: ${budget || '未入力'}
希望時期: ${timeline || '未入力'}
`;
    } else {
      emailContent += `
【採用関連】
年齢: ${age || '未入力'}
経験年数: ${experience || '未入力'}
資格: ${qualification || '未入力'}
志望動機: ${motivation || '未入力'}
`;
    }

    emailContent += `
【メッセージ】
${message}

---
このメールは藤喜建設のホームページから自動送信されています。
送信日時: ${new Date().toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' })}
`;

    // メール送信設定
    const mailOptions = {
      from: process.env.WAKWAK_USER,
      to: 'fk.kensetsu@ai.wakwak.com',
      subject: `【藤喜建設HP】${formType === 'construction' ? '工事' : '採用'}に関するお問い合わせ - ${name}様`,
      text: emailContent,
      replyTo: email
    };

    // メール送信
    await transporter.sendMail(mailOptions);

    // 成功レスポンス
    return NextResponse.json(
      { message: 'お問い合わせを正常に送信しました。' },
      { status: 200 }
    );

  } catch (error) {
    console.error('メール送信エラー:', error);
    return NextResponse.json(
      { error: 'メール送信中にエラーが発生しました。しばらく時間をおいて再度お試しください。' },
      { status: 500 }
    );
  }
} 