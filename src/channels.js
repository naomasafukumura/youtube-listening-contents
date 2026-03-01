/**
 * 対象チャンネルリスト
 * ネイティブのガチ日常会話チャンネル（英語教材系は除外）
 *
 * チャンネルIDの調べ方:
 * 1. チャンネルページを開く
 * 2. URLの末尾が /channel/UCxxxxx → それがID
 * 3. または node resolveChannels.js で @handle → channelId を一括変換
 *
 * カテゴリ:
 * - family: 家族・カップル系
 * - solo: ソロVlog系（20-30代）
 * - friends: 友達グループ系
 * - podcast: ポッドキャスト・雑談系
 * - routine: Day in my life・ルーティン系
 * - travel: 旅行・ロードトリップ系
 */
const CHANNELS = [
  // ============================================================
  // 家族・カップル系 (19)
  // ============================================================
  { id: "", handle: "@RomanAtwoodVlogs", name: "Roman Atwood Vlogs", category: "family", subs: "15.5M", note: "家族の日常。食卓の会話がリアル" },
  { id: "", handle: "@EllieandJared", name: "Ellie and Jared", category: "family", subs: "1.6M", note: "7年以上毎日投稿。買い物、子育て" },
  { id: "", handle: "@JessandGabriel", name: "Jess and Gabriel", category: "family", subs: "3.2M", note: "落ち着いたカップル会話。料理、計画" },
  { id: "", handle: "@BenjiManTV", name: "Benji and Judy", category: "family", subs: "1.8M", note: "10年以上毎日Vlog。カメラを意識してない自然な会話" },
  { id: "", handle: "@theACEfamily", name: "The ACE Family", category: "family", subs: "18M", note: "アメリカの家族のリアルな日常会話" },
  { id: "", handle: "@DailyBumps", name: "Daily Bumps", category: "family", subs: "6M", note: "子育て、DIY、日常の自然な会話" },
  { id: "", handle: "@KKandbabyJ", name: "KKandBabyJ", category: "family", subs: "2M", note: "多文化カップル。日常の自然な対話" },
  { id: "", handle: "@JHouseVlogs", name: "J House Vlogs", category: "family", subs: "3.4M", note: "7人家族。食事、学校、外出の会話" },
  { id: "", handle: "@aspynovard", name: "Aspyn Ovard", category: "family", subs: "3.2M", note: "落ち着いたVlog。夫婦の自然な対話" },
  { id: "", handle: "@MattandAbby", name: "Matt and Abby", category: "family", subs: "3M", note: "若いカップル。子育て、日常ルーティン" },
  { id: "", handle: "@TheInghamFamily", name: "The Ingham Family", category: "family", subs: "1.3M", note: "イギリスの家族。ブリティッシュ英語の日常" },
  { id: "", handle: "@RoseAndRosie", name: "Rose and Rosie", category: "family", subs: "1M", note: "イギリスのカップル。ウィットのある高速会話" },
  { id: "", handle: "@FlyingTheNest", name: "Flying The Nest", category: "family", subs: "1.3M", note: "オーストラリアのカップル。オージー英語" },
  { id: "", handle: "@TheNorrisNuts", name: "The Norris Nuts", category: "family", subs: "7M", note: "オーストラリアの大家族。速い自然なオージー英語" },
  { id: "", handle: "@JatieVlogs", name: "Jatie Vlogs", category: "family", subs: "3.5M", note: "カップルの日常会話とリアクション" },
  { id: "", handle: "@SailingLaVagabonde", name: "Sailing La Vagabonde", category: "family", subs: "2M", note: "オーストラリアのカップル。海上生活のカジュアル会話" },
  { id: "", handle: "@BrooklynAndBailey", name: "Brooklyn and Bailey", category: "family", subs: "7M", note: "双子姉妹の自然な対話。大学、デート、日常" },
  { id: "", handle: "@CarlyandErin", name: "Carly and Erin", category: "family", subs: "300K", note: "女友達同士の自然な日常会話" },
  { id: "", handle: "@TheLaBrantFam", name: "The LaBrant Family", category: "family", subs: "13M", note: "アメリカ郊外の典型的な家族会話" },

  // ============================================================
  // ソロVlog系 20-30代 (20)
  // ============================================================
  { id: "", handle: "@emmachamberlain", name: "Emma Chamberlain", category: "solo", subs: "12M", note: "カジュアル会話の代名詞。カフェ、買い物、独り言" },
  { id: "", handle: "@RemingtonCruz", name: "Remi Cruz", category: "solo", subs: "1.4M", note: "LA生活。料理しながらの自然な語り" },
  { id: "", handle: "@brookemiccio", name: "Brooke Miccio", category: "solo", subs: "288K", note: "NYC生活。日記みたいな自然さ" },
  { id: "", handle: "@AlishaMarie", name: "Alisha Marie", category: "solo", subs: "8M", note: "日常のリアル。掃除、料理、仕事の愚痴" },
  { id: "", handle: "@Lavendaire", name: "Lavendaire", category: "solo", subs: "2M", note: "穏やかなトーン。ルーティン系" },
  { id: "", handle: "@SydneySerena", name: "Sydney Serena", category: "solo", subs: "1M", note: "買い物しながらの独り言。若いアメリカ英語" },
  { id: "", handle: "@TaraMichelle", name: "Tara Michelle", category: "solo", subs: "1.5M", note: "カナダ人のLA生活。不安、デート、日常の正直な語り" },
  { id: "", handle: "@AnnaSitar", name: "Anna Sitar", category: "solo", subs: "1M", note: "温かい日常Vlog。自然なナレーション" },
  { id: "", handle: "@KelseyKreppel", name: "Kelsey Kreppel", category: "solo", subs: "960K", note: "LA生活。料理、大人の日常の自然な語り" },
  { id: "", handle: "@JonOlsson", name: "Jon Olsson", category: "solo", subs: "1.2M", note: "ライフスタイル＋旅行。英語での自然なナレーション" },
  { id: "", handle: "@BenBrown", name: "Ben Brown", category: "solo", subs: "700K", note: "イギリス人。穏やかなナレーションスタイル" },
  { id: "", handle: "@FunForLouis", name: "Fun for Louis", category: "solo", subs: "2M", note: "イギリス人の旅行＋日常。明るい自然な英語" },
  { id: "", handle: "@ElleOfTheMills", name: "Elle Mills", category: "solo", subs: "1.5M", note: "カナダ人。感情的で生々しい個人Vlog" },
  { id: "", handle: "@TheCottageFairy", name: "TheCottageFairy", category: "solo", subs: "2.5M", note: "田舎暮らし。柔らかく自然な英語ナレーション" },
  { id: "", handle: "@LoganPaul", name: "Logan Paul", category: "solo", subs: "23M", note: "ハイエネルギー。スラング多めのアメリカ英語" },
  { id: "", handle: "@ShelbyChurch", name: "Shelby Church", category: "solo", subs: "1.5M", note: "LAのテック系生活。自然なモノローグ" },
  { id: "", handle: "@ClaudiaSulewski", name: "Claudia Sulewski", category: "solo", subs: "1.5M", note: "アパート生活、料理。落ち着いた会話トーン" },
  { id: "", handle: "@MiaMaples", name: "Mia Maples", category: "solo", subs: "3M", note: "カナダ人。買い物やDIYの明るい実況" },
  { id: "", handle: "@DrewGooden", name: "Drew Gooden", category: "solo", subs: "4M", note: "コメンタリー＋個人Vlog。ウィットのある会話" },
  { id: "", handle: "@EddyBurback", name: "Eddy Burback", category: "solo", subs: "1M", note: "カジュアルなアメリカ英語。ユーモア交じり" },

  // ============================================================
  // 友達グループ系 (14)
  // ============================================================
  { id: "", handle: "@DavidDobrik", name: "David Dobrik", category: "friends", subs: "17M", note: "友達グループの高速会話。スラング満載" },
  { id: "", handle: "@CodyKo", name: "Cody Ko", category: "friends", subs: "6M", note: "親友とのリアクション＋雑談" },
  { id: "", handle: "@NoelMiller", name: "Noel Miller", category: "friends", subs: "3M", note: "Cody Koとのコンビ。自然な掛け合い" },
  { id: "", handle: "@ZaneAndHeath", name: "Zane and Heath", category: "friends", subs: "1M", note: "男同士のガチ会話。親友のノリ" },
  { id: "", handle: "@ScottySire", name: "Scotty Sire", category: "friends", subs: "3M", note: "ソロ＋グループのミックス。カジュアルな男性英語" },
  { id: "", handle: "@AlexErnst", name: "Alex Ernst", category: "friends", subs: "2M", note: "友達との自然なハングアウト" },
  { id: "", handle: "@ToddySmith", name: "Toddy Smith", category: "friends", subs: "2.5M", note: "グループでの高速会話。スラング多め" },
  { id: "", handle: "@JasonNash", name: "Jason Nash", category: "friends", subs: "3M", note: "お父さん世代のユーモア＋友達グループ" },
  { id: "", handle: "@MattKing", name: "Matt King", category: "friends", subs: "600K", note: "カジュアルな日常と友達との自然な会話" },
  { id: "", handle: "@NELKBoys", name: "NELK Boys", category: "friends", subs: "8M", note: "カナダ＋アメリカの友達グループ。フィルターなしの会話" },
  { id: "", handle: "@DannyGonzalez", name: "Danny Gonzalez", category: "friends", subs: "6M", note: "Drew Goodenとのコラボ。友達同士の自然な掛け合い" },
  { id: "", handle: "@DudePerfect", name: "Dude Perfect", category: "friends", subs: "60M", note: "テキサス5人組。友達のノリとリアクション" },
  { id: "", handle: "@LizaKoshy", name: "Liza Koshy", category: "friends", subs: "18M", note: "ハイエネルギー。速くて面白い自然なアメリカ英語" },
  { id: "", handle: "@CorinnaKopf", name: "Corinna Kopf", category: "friends", subs: "1.7M", note: "20代の友達とのカジュアルな会話" },

  // ============================================================
  // ポッドキャスト・雑談系 (20)
  // ============================================================
  { id: "", handle: "@BadFriendsPod", name: "Bad Friends", category: "podcast", subs: "1.5M", note: "コメディアン2人の高速会話。スラング・イディオム多い" },
  { id: "", handle: "@H3Podcast", name: "H3 Podcast", category: "podcast", subs: "2.58M", note: "2-3時間のカジュアルトーク" },
  { id: "", handle: "@EarBiscuits", name: "Ear Biscuits", category: "podcast", subs: "600K", note: "30年来の親友の深い会話。498エピソード" },
  { id: "", handle: "@TrashTaste", name: "Trash Taste", category: "podcast", subs: "1.64M", note: "3人の友達雑談。米英豪の英語ミックス" },
  { id: "", handle: "@TheOfficialPodcast", name: "The Official Podcast", category: "podcast", subs: "500K", note: "4人の友達のゆるい会話" },
  { id: "", handle: "@TheoVon", name: "This Past Weekend (Theo Von)", category: "podcast", subs: "3M", note: "南部アメリカ英語。長い自然なストーリーテリング" },
  { id: "", handle: "@KillTony", name: "Kill Tony", category: "podcast", subs: "2.5M", note: "ライブコメディ。高速のアドリブ会話" },
  { id: "", handle: "@YMHStudios", name: "Two Bears One Cave / YMH", category: "podcast", subs: "2M", note: "親友コメディアン2人の爆笑トーク" },
  { id: "", handle: "@ChuckleSandwich", name: "Chuckle Sandwich", category: "podcast", subs: "1.5M", note: "若い男性のランダムな雑談" },
  { id: "", handle: "@FullSendPodcast", name: "Full Send Podcast", category: "podcast", subs: "2M", note: "ゲストとの長時間カジュアル会話" },
  { id: "", handle: "@imaboredfrfr", name: "Impaulsive (Logan Paul)", category: "podcast", subs: "4M", note: "有名人との自然なインタビュー" },
  { id: "", handle: "@MattandShanesSecretPodcast", name: "Matt and Shane's Secret Podcast", category: "podcast", subs: "500K", note: "コメディアン2人のフィルターなし雑談" },
  { id: "", handle: "@TheBasementYard", name: "The Basement Yard", category: "podcast", subs: "800K", note: "幼馴染2人の週1キャッチアップ" },
  { id: "", handle: "@TMGPodcast", name: "Tiny Meat Gang Podcast", category: "podcast", subs: "1.5M", note: "Cody Ko＋Noel Millerのポッドキャスト版" },
  { id: "", handle: "@WhiskeyGinger", name: "Whiskey Ginger", category: "podcast", subs: "700K", note: "お酒飲みながらのリラックス会話" },
  { id: "", handle: "@UhhYeahDude", name: "Uhh Yeah Dude", category: "podcast", subs: "100K", note: "2006年から続く友達2人のアメリカ文化雑談" },
  { id: "", handle: "@TheValleycast", name: "The Valleycast", category: "podcast", subs: "300K", note: "友達グループのカジュアルなトーク" },
  { id: "", handle: "@AnythingGoesEmma", name: "Anything Goes (Emma Chamberlain)", category: "podcast", subs: "N/A", note: "Emmaの完全自然な独り語りポッドキャスト" },
  { id: "", handle: "@ColinandSamir", name: "Colin and Samir", category: "podcast", subs: "N/A", note: "男性2人のカジュアルなクリエイター系トーク" },

  // ============================================================
  // Day in my life・ルーティン系 (13)
  // ============================================================
  { id: "", handle: "@casey", name: "Casey Neistat", category: "routine", subs: "12.4M", note: "NYCナレーション。ストーリーテリングが上手い" },
  { id: "", handle: "@HollyGabrielle", name: "Holly Gabrielle", category: "routine", subs: "500K", note: "リアルな在宅勤務の日常" },
  { id: "", handle: "@bestdressed", name: "bestdressed (Ashley)", category: "routine", subs: "4M", note: "若い女性の日常。ウィットのある自然なナレーション" },
  { id: "", handle: "@IsabellaGabrielle", name: "Isabella Gabrielle", category: "routine", subs: "200K", note: "コージーな朝ルーティン。柔らかい自然な英語" },
  { id: "", handle: "@RachelAust", name: "Rachel Aust", category: "routine", subs: "700K", note: "オーストラリア。フィットネス＋食事＋仕事の日常" },
  { id: "", handle: "@AmyTV", name: "Amy Landino", category: "routine", subs: "400K", note: "生産性重視の日常ルーティン" },
  { id: "", handle: "@aliabdaal", name: "Ali Abdaal", category: "routine", subs: "5M", note: "イギリス。生産的な日常の明瞭なナレーション" },
  { id: "", handle: "@mattdavella", name: "Matt D'Avella", category: "routine", subs: "3.5M", note: "ミニマリスト。落ち着いたアメリカ英語" },
  { id: "", handle: "@PatriciaBright", name: "Patricia Bright", category: "routine", subs: "3M", note: "ロンドン英語。母親業＋キャリアの日常" },
  { id: "", handle: "@MargotLee", name: "Margot Lee", category: "routine", subs: "500K", note: "NYC生活の自然なナレーション" },
  { id: "", handle: "@CaitlynNeier", name: "Caitlyn Neier", category: "routine", subs: "100K", note: "小さいチャンネルだからこそ生々しい日常" },

  // ============================================================
  // 旅行・ロードトリップ系 (15)
  // ============================================================
  { id: "", handle: "@KaraandNate", name: "Kara and Nate", category: "travel", subs: "4.1M", note: "夫婦旅行。リアルタイムの相談・判断の会話" },
  { id: "", handle: "@TheEndlessAdventure", name: "The Endless Adventure", category: "travel", subs: "635K", note: "気さくなカップル。食と文化の探索" },
  { id: "", handle: "@LostLeBlanc", name: "Lost LeBlanc", category: "travel", subs: "10M", note: "友達に話すような自然なナレーション" },
  { id: "", handle: "@NomadicFanatic", name: "Nomadic Fanatic", category: "travel", subs: "242K", note: "ソロRV旅行。実用的な独り言" },
  { id: "", handle: "@HeyNadine", name: "Hey Nadine", category: "travel", subs: "320K", note: "エネルギッシュな旅行ナレーション" },
  { id: "", handle: "@MarkWiens", name: "Mark Wiens", category: "travel", subs: "11.6M", note: "アメリカ人。食レポの熱い自然なナレーション" },
  { id: "", handle: "@IndigoTraveller", name: "Indigo Traveller", category: "travel", subs: "2.1M", note: "ニュージーランド人。思慮深いナレーション" },
  { id: "", handle: "@EamonandBec", name: "Eamon and Bec", category: "travel", subs: "1M", note: "カナダのカップル。バンライフのリアルな会話" },
  { id: "", handle: "@WeReTheRussos", name: "We're the Russos", category: "travel", subs: "300K", note: "アメリカのカップル。バンライフの実用会話" },
  { id: "", handle: "@svdelos", name: "SV Delos", category: "travel", subs: "975K", note: "セーリングクルー。複数人の自然な会話" },
  { id: "", handle: "@EvazuBeck", name: "Eva zu Beck", category: "travel", subs: "800K", note: "イギリス英語。秘境でのナレーション" },
  { id: "", handle: "@FearlessAndFar", name: "Fearless and Far (Mike Corey)", category: "travel", subs: "1M", note: "アメリカ人のソロ旅。リフレクティブな語り" },
  { id: "", handle: "@JintiFell", name: "Jinti Fell", category: "travel", subs: "300K", note: "オーストラリア。ミニマリストのバンライフ" },
  { id: "", handle: "@AnnaEverywhere", name: "Anna Everywhere", category: "travel", subs: "200K", note: "カナダのカップル。友達みたいな旅行ナレーション" },
  { id: "", handle: "@MattandNat", name: "Matt and Nat", category: "travel", subs: "200K", note: "アメリカのカップル。全50州をロードトリップ" },
];

module.exports = { CHANNELS };
