export interface Quote {
  text: string;
  author: string;
  category: string;
  language: string;
}

export const quotes: Quote[] = [
  // English Quotes
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
    category: "Motivation",
    language: "English"
  },
  {
    text: "Innovation distinguishes between a leader and a follower.",
    author: "Steve Jobs",
    category: "Leadership",
    language: "English"
  },
  {
    text: "Life is what happens to you while you're busy making other plans.",
    author: "John Lennon",
    category: "Life",
    language: "English"
  },
  {
    text: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt",
    category: "Dreams",
    language: "English"
  },
  {
    text: "It is during our darkest moments that we must focus to see the light.",
    author: "Aristotle",
    category: "Hope",
    language: "English"
  },
  {
    text: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
    category: "Action",
    language: "English"
  },
  {
    text: "Don't let yesterday take up too much of today.",
    author: "Will Rogers",
    category: "Time",
    language: "English"
  },
  {
    text: "You learn more from failure than from success. Don't let it stop you. Failure builds character.",
    author: "Unknown",
    category: "Failure",
    language: "English"
  },
  {
    text: "If you are working on something that you really care about, you don't have to be pushed. The vision pulls you.",
    author: "Steve Jobs",
    category: "Passion",
    language: "English"
  },
  {
    text: "People who are crazy enough to think they can change the world, are the ones who do.",
    author: "Rob Siltanen",
    category: "Change",
    language: "English"
  },
  {
    text: "Failure will never overtake me if my determination to succeed is strong enough.",
    author: "Og Mandino",
    category: "Success",
    language: "English"
  },
  {
    text: "The secret of getting ahead is getting started.",
    author: "Mark Twain",
    category: "Action",
    language: "English"
  },
  {
    text: "I've missed more than 9000 shots in my career. I've lost almost 300 games. 26 times I've been trusted to take the game winning shot and missed. I've failed over and over and over again in my life. And that is why I succeed.",
    author: "Michael Jordan",
    category: "Success",
    language: "English"
  },
  {
    text: "Don't be afraid to give up the good to go for the great.",
    author: "John D. Rockefeller",
    category: "Growth",
    language: "English"
  },
  {
    text: "The only impossible journey is the one you never begin.",
    author: "Tony Robbins",
    category: "Journey",
    language: "English"
  },
  {
    text: "In the middle of difficulty lies opportunity.",
    author: "Albert Einstein",
    category: "Opportunity",
    language: "English"
  },
  {
    text: "The only person you are destined to become is the person you decide to be.",
    author: "Ralph Waldo Emerson",
    category: "Self-Improvement",
    language: "English"
  },
  {
    text: "Go confidently in the direction of your dreams. Live the life you have imagined.",
    author: "Henry David Thoreau",
    category: "Dreams",
    language: "English"
  },
  {
    text: "When you have a dream, you've got to grab it and never let go.",
    author: "Carol Burnett",
    category: "Dreams",
    language: "English"
  },

  // Tagalog Quotes
  {
    text: "Ang pag-asa ay ang huling nawawala sa tao.",
    author: "Jose Rizal",
    category: "Pag-asa",
    language: "Tagalog"
  },
  {
    text: "Ang hindi marunong lumingon sa pinanggalingan ay hindi makararating sa paroroonan.",
    author: "Jose Rizal",
    category: "Pagkakaisa",
    language: "Tagalog"
  },
  {
    text: "Ang kabataan ang pag-asa ng bayan.",
    author: "Jose Rizal",
    category: "Kabataan",
    language: "Tagalog"
  },
  {
    text: "Walang imposible sa taong may determinasyon.",
    author: "Unknown",
    category: "Determinasyon",
    language: "Tagalog"
  },
  {
    text: "Ang tagumpay ay nagsisimula sa pagtitiwala sa sarili.",
    author: "Unknown",
    category: "Tagumpay",
    language: "Tagalog"
  },
  {
    text: "Ang bawat araw ay isang bagong pagkakataon.",
    author: "Unknown",
    category: "Pagkakataon",
    language: "Tagalog"
  },
  {
    text: "Ang pagmamahal sa pamilya ay walang katumbas.",
    author: "Unknown",
    category: "Pamilya",
    language: "Tagalog"
  },
  {
    text: "Ang edukasyon ay susi sa tagumpay.",
    author: "Unknown",
    category: "Edukasyon",
    language: "Tagalog"
  },
  {
    text: "Ang paghihirap ay bahagi ng buhay, ngunit hindi ito dapat maging hadlang sa iyong mga pangarap.",
    author: "Unknown",
    category: "Paghihirap",
    language: "Tagalog"
  },
  {
    text: "Ang tunay na kayamanan ay nasa puso, hindi sa bulsa.",
    author: "Unknown",
    category: "Kayamanan",
    language: "Tagalog"
  },
  {
    text: "Ang pagbabago ay nagsisimula sa sarili.",
    author: "Unknown",
    category: "Pagbabago",
    language: "Tagalog"
  },
  {
    text: "Ang pagtulong sa kapwa ay walang katumbas na kasiyahan.",
    author: "Unknown",
    category: "Pagmamahal",
    language: "Tagalog"
  },
  {
    text: "Ang panahon ay ginto, huwag itong sayangin.",
    author: "Unknown",
    category: "Oras",
    language: "Tagalog"
  },
  {
    text: "Ang pag-ibig ay walang hangganan.",
    author: "Unknown",
    category: "Pag-ibig",
    language: "Tagalog"
  },
  {
    text: "Ang tunay na kaligayahan ay nasa pagiging kontento sa kung ano ang mayroon ka.",
    author: "Unknown",
    category: "Kaligayahan",
    language: "Tagalog"
  },

  // Bisaya Quotes
  {
    text: "Ang kalisud dili magpabilin nga kalisud, adunay katapusan ang tanan.",
    author: "Unknown",
    category: "Paglaum",
    language: "Bisaya"
  },
  {
    text: "Ang pagmahal sa pamilya walay katumbas.",
    author: "Unknown",
    category: "Pamilya",
    language: "Bisaya"
  },
  {
    text: "Ang edukasyon mao ang yawi sa kalampusan.",
    author: "Unknown",
    category: "Edukasyon",
    language: "Bisaya"
  },
  {
    text: "Ang panahon mahal, ayaw kini usik.",
    author: "Unknown",
    category: "Oras",
    language: "Bisaya"
  },
  {
    text: "Ang pagtabang sa isigkatawo walay katumbas nga kalipay.",
    author: "Unknown",
    category: "Pagmahal",
    language: "Bisaya"
  },
  {
    text: "Ang kagawasan dili mabayran sa bisan unsa.",
    author: "Unknown",
    category: "Kagawasan",
    language: "Bisaya"
  },
  {
    text: "Ang paglaum mao ang nagpabuhi sa tawo.",
    author: "Unknown",
    category: "Paglaum",
    language: "Bisaya"
  },
  {
    text: "Ang pagmahal walay utlanan.",
    author: "Unknown",
    category: "Pagmahal",
    language: "Bisaya"
  },
  {
    text: "Ang tinuod nga kalipay anaa sa pagka-kontento sa kung unsa ang naa nimo.",
    author: "Unknown",
    category: "Kalipay",
    language: "Bisaya"
  },
  {
    text: "Ang pagbag-o magsugod sa kaugalingon.",
    author: "Unknown",
    category: "Pagbag-o",
    language: "Bisaya"
  },
  {
    text: "Ang kalisud magtudlo kanato sa pagkamalig-on.",
    author: "Unknown",
    category: "Kalisud",
    language: "Bisaya"
  },
  {
    text: "Ang pagtrabaho sa kaugalingon mao ang labing maayong trabaho.",
    author: "Unknown",
    category: "Trabaho",
    language: "Bisaya"
  },
  {
    text: "Ang pag-ampo mao ang kusog sa tawo.",
    author: "Unknown",
    category: "Pag-ampo",
    language: "Bisaya"
  },
  {
    text: "Ang pagmahal sa kaugalingon importante aron makahigugma sa uban.",
    author: "Unknown",
    category: "Pagmahal",
    language: "Bisaya"
  },
  {
    text: "Ang matag adlaw bag-ong oportunidad.",
    author: "Unknown",
    category: "Oportunidad",
    language: "Bisaya"
  },

  // Bible Verses
  {
    text: "For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, to give you hope and a future.",
    author: "Jeremiah 29:11",
    category: "Hope",
    language: "Bible"
  },
  {
    text: "I can do all things through Christ who strengthens me.",
    author: "Philippians 4:13",
    category: "Strength",
    language: "Bible"
  },
  {
    text: "Trust in the Lord with all your heart and lean not on your own understanding.",
    author: "Proverbs 3:5",
    category: "Trust",
    language: "Bible"
  },
  {
    text: "The Lord is my shepherd; I shall not want.",
    author: "Psalm 23:1",
    category: "Provision",
    language: "Bible"
  },
  {
    text: "And we know that in all things God works for the good of those who love him, who have been called according to his purpose.",
    author: "Romans 8:28",
    category: "Purpose",
    language: "Bible"
  },
  {
    text: "Be still, and know that I am God.",
    author: "Psalm 46:10",
    category: "Peace",
    language: "Bible"
  },
  {
    text: "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.",
    author: "John 3:16",
    category: "Love",
    language: "Bible"
  },
  {
    text: "The Lord your God is with you, the Mighty Warrior who saves. He will take great delight in you; in his love he will no longer rebuke you, but will rejoice over you with singing.",
    author: "Zephaniah 3:17",
    category: "Love",
    language: "Bible"
  },
  {
    text: "Cast all your anxiety on him because he cares for you.",
    author: "1 Peter 5:7",
    category: "Peace",
    language: "Bible"
  },
  {
    text: "The Lord is close to the brokenhearted and saves those who are crushed in spirit.",
    author: "Psalm 34:18",
    category: "Comfort",
    language: "Bible"
  },
  {
    text: "Have I not commanded you? Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go.",
    author: "Joshua 1:9",
    category: "Courage",
    language: "Bible"
  },
  {
    text: "And now these three remain: faith, hope and love. But the greatest of these is love.",
    author: "1 Corinthians 13:13",
    category: "Love",
    language: "Bible"
  },
  {
    text: "Come to me, all you who are weary and burdened, and I will give you rest.",
    author: "Matthew 11:28",
    category: "Rest",
    language: "Bible"
  },
  {
    text: "The Lord is my light and my salvation—whom shall I fear? The Lord is the stronghold of my life—of whom shall I be afraid?",
    author: "Psalm 27:1",
    category: "Courage",
    language: "Bible"
  },
  {
    text: "For where two or three gather in my name, there am I with them.",
    author: "Matthew 18:20",
    category: "Community",
    language: "Bible"
  },
  {
    text: "But seek first his kingdom and his righteousness, and all these things will be given to you as well.",
    author: "Matthew 6:33",
    category: "Priority",
    language: "Bible"
  },
  {
    text: "The Lord will fight for you; you need only to be still.",
    author: "Exodus 14:14",
    category: "Faith",
    language: "Bible"
  },
  {
    text: "And my God will meet all your needs according to the riches of his glory in Christ Jesus.",
    author: "Philippians 4:19",
    category: "Provision",
    language: "Bible"
  },
  {
    text: "For nothing is impossible with God.",
    author: "Luke 1:37",
    category: "Faith",
    language: "Bible"
  },
  {
    text: "The Lord is good, a refuge in times of trouble. He cares for those who trust in him.",
    author: "Nahum 1:7",
    category: "Refuge",
    language: "Bible"
  }
];
