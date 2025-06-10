export interface Employee {
  id: string;
  name: string;
  nameInitials?: string; // イニシャル表示用
  position: string;
  department: string;
  experience: string;
  age?: string;
  joinYear: number;
  education?: string;
  previousJob?: string;
  image: string;
  catchphrase: string; // キャッチコピー
  profileImages: string[]; // 複数の写真
  
  // インタビュー内容
  interview: {
    reason: string; // 入社のきっかけ
    currentWork: string; // 現在の仕事内容
    rewarding: string; // やりがい
    companyAtmosphere: string; // 会社の雰囲気
    improvements?: string; // 改善点（ベテラン社員向け）
    challenges: string; // 大変だったこと
    growth: string; // 成長した点
    workLifeBalance: string; // ワークライフバランス
    futureGoals: string; // 今後の目標
    messageToNewcomers: string; // 新入社員へのメッセージ
  };
  
  // とある一日のスケジュール
  dailySchedule: DailyScheduleItem[];
  
  // 趣味・プライベート
  hobbies: string[];
  
  // カテゴリー（フィルタリング用）
  category: 'veteran' | 'mid-career' | 'young' | 'female' | 'career-change';
  tags: string[]; // 検索・フィルタリング用タグ
}

export interface DailyScheduleItem {
  time: string;
  title: string;
  description: string;
  comment?: string; // 吹き出しコメント
  image?: string;
}

export interface EmployeeFilter {
  category?: string;
  position?: string;
  experience?: string;
} 