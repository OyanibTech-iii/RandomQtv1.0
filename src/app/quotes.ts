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
  }
];
