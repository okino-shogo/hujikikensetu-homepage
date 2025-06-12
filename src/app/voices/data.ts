import { Employee } from './types';

export const employees: Employee[] = [
  {
    id: 'sato-s',
    name: 'Sさん',
    nameInitials: 'S.S',
    position: '型枠大工職長',
    department: '建築部',
    experience: '27年',
    age: '52歳',
    joinYear: 1997,
    education: '高等学校卒業',
    image: '/images/職長2.jpeg',
    catchphrase: '雰囲気がいい会社',
    profileImages: [
      '/images/職長2.jpeg',
      '/images/作業写真19.jpeg',
    ],
    
    interview: {
      reason: '地元の会社で、安定して働けると思ったから。',
      currentWork: '普段は職長として型枠作業を一通りやりながら、現場のチームをまとめる仕事をしています。',
      rewarding: '楽しい事や建設業でしか得られない事もあるので、やりがいを感じています。',
      companyAtmosphere: '藤喜建設は明るいキャラクターの人が多く雰囲気のいい会社だと思います。',
      improvements: '以前は大変な労働環境でしたが、現在では少しずつ改善され皆さんが思っているほど厳しい職場ではなくなってきています。',
      challenges: '建築の仕事は危険な作業をすることもあるので、事故や災害が無いように安全第一を心掛けて作業しています。',
      growth: '職長として現場をまとめる経験を積み重ねてきました。',
      workLifeBalance: '以前より働きやすい環境になってきています。',
      futureGoals: '安全第一で現場をまとめ、後輩の指導も頑張りたいと思います。',
      messageToNewcomers: 'それでも体力を使うので大変な仕事ではあるのですが、楽しい事や建設業でしか得られない事もあるので興味のある方は挑戦してみてください。'
    },
    
    // 簡潔な1日のスケジュール
    dailySchedule: [
      {
        time: '7:30',
        title: '出社・準備',
        description: '現場の準備と安全確認'
      },
      {
        time: '8:00',
        title: '朝礼・作業開始',
        description: 'チーム全体で安全確認し、型枠作業開始'
      },
      {
        time: '12:00',
        title: '昼休憩',
        description: '仲間と昼食を取りながら休憩'
      },
      {
        time: '13:00',
        title: '午後の作業',
        description: '職長として現場をまとめながら作業継続'
      },
      {
        time: '17:00',
        title: '作業終了',
        description: '現場の片付けと明日の準備'
      }
    ],
    
    hobbies: ['釣り', '野球観戦'],
    category: 'veteran',
    tags: ['型枠', '職長', 'ベテラン', '安全第一']
  }
];

export const filterOptions = {
  categories: [
    { value: 'all', label: 'すべて' },
    { value: 'veteran', label: 'ベテラン' }
  ],
  positions: [
    { value: 'all', label: 'すべて' },
    { value: '型枠', label: '型枠大工' },
    { value: '職長', label: '職長' }
  ]
}; 