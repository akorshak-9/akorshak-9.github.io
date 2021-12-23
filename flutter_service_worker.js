'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "9982f23dd66319cff62be29b005052fa",
"index.html": "66d421c777f096838ad95bda083a526c",
"/": "66d421c777f096838ad95bda083a526c",
"main.dart.js": "da5034751d1151439cca71dfe397f50e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "1e6c7e57b6ff6ecff00752d417cb6d21",
"assets/assets_video/video_onboarding_2.mp4": "3d8075067ce1fbda7464c04330716f67",
"assets/images/snicker.png": "57908ca6fe6bb326090ba3080ad18b12",
"assets/images/borat.png": "03eddea01985cd56e3b5db6535d39cfd",
"assets/images/onboarding_goal_graph.png": "c9819442fb61b3071329f68d12d8a703",
"assets/images/twerk_image.png": "d5b728494462a9452dde038427ea7d6a",
"assets/images/afro_image.png": "49bb87fec162f23b2b56fd72a492b239",
"assets/images/tik-tok_image.png": "c767520d31e4635204a074250d82bb95",
"assets/images/k-pop_image.png": "5caab9c9ef2948ee9d95788e1c18fe2c",
"assets/images/onboarding_loose_some_weight.png": "2b9c35c8359043409be32a3d63586ee0",
"assets/images/onboarding_minimal_rest.png": "53464104eef98dc7d435ef969512bb50",
"assets/images/heels_image.png": "685d3420ca5021db3c29ad46d251c7a9",
"assets/images/onboarding_throughout_the_day.png": "d3e82daaae3b5d9384cc57133b212723",
"assets/images/onboarding_how_it_fits.png": "b20c23d71338d7b0257ca33156df53c5",
"assets/images/onboarding_around_lunchtime.png": "0f969c434fe8e1fb766eb75054cca696",
"assets/images/popular-image.png": "21280fc515f92c4f596a0794b9cbe7f1",
"assets/images/intermediate.png": "63e1d42960441870c05c2cb3c8e5f00e",
"assets/images/jazz-funk_image.png": "b1404df39b8a3b1cecb37cbe90c0b6f8",
"assets/images/waacking_image.png": "ae1f9bf247921efc561139b4bff8a1a1",
"assets/images/onboarding_drop_the_most_weight.png": "6cf2c284acbce3e3dbb978fed0f54602",
"assets/images/onboarding_long_and_well.png": "9f572ff84c81eb96121e28f384cadb63",
"assets/images/tutting_image.png": "eb355aa047b8d5d89b56da09f0d93349",
"assets/images/house_image.png": "69e8d15e828b9133404e90f3b2eab6ce",
"assets/images/onboarding_mostly_seated.png": "d087c3585a167c68d4cd3d070285ee05",
"assets/images/gliding_image.png": "3bf40430e358945b42ef46c904ce567c",
"assets/images/onboarding_mostly_on_feet.png": "e88ed357f5ffc72c41dcd4a8ffab3b41",
"assets/images/shuffle_image.png": "b0610e06ac8773e1367bd567e5880493",
"assets/images/bellydance_image.png": "b0392c1d780c9baac70e4a461858c388",
"assets/images/hip-hop_image.png": "740861aff7948ddf9d2356e487f746c9",
"assets/images/onboarding_after_meals.png": "6ff01f226a6e797186d6bfa8de8703e1",
"assets/images/dancehall_image.png": "5fef6629979fc5225794e5c653d8c332",
"assets/images/contemp_image.png": "21ba7ebd9168060a86659fb5510547a6",
"assets/images/locking_image.png": "5d4866f3c1c3a977a368f68d2d958f5f",
"assets/images/travolta.png": "8ebcc6b0afef886f9f3543f560c158cb",
"assets/images/onboarding_mostly_sedentary.png": "687911b67e613fc394b2731cc0b1cccf",
"assets/images/fortnite_image.png": "5bb96ef018f98d3b33474c9fb83c8f18",
"assets/images/vogue_image.png": "2162d9e037f50628210d4da8cfd250a8",
"assets/images/advanced.png": "955ea3e5ca4bc4f6a1488d8ea3148349",
"assets/images/litefeet_image.png": "39ff0fbfebf1a913dd30634207d7c459",
"assets/images/jazz-modern_image.png": "f8ff911df2cf4a8f0b567eb9e881817c",
"assets/images/onboarding_sleep_superhero.png": "19d33bc72116661452bddca1daaf8693",
"assets/images/onboarding_walking_daily.png": "34384cc2cfd10fa512168c1f60a89e30",
"assets/images/waving_image.png": "2c4257f91dced9ddf7401187f29ec2d1",
"assets/images/tooltip_background.png": "fbb8a09716e5a3059626fc2b1c1c83e2",
"assets/images/popping_image.png": "1c58a4d68b577ce1def7d61544a3203b",
"assets/images/breaking_image.png": "713646fb2aee22c37677df4acb597855",
"assets/images/onboarding_shut_eye.png": "c8b6b01f730abdfdbd5e42a532d0f3d6",
"assets/AssetManifest.json": "60207a5062489cfe41e9d186e388b024",
"assets/NOTICES": "62e4e22cb9c5dacb213db2d372eee24c",
"assets/FontManifest.json": "3ddd9b2ab1c2ae162d46e3cc7b78ba88",
"assets/icons/ok_mark.png": "061d1c7ecb7a01fd17acac924536cb1c",
"assets/icons/cam-ico.png": "96af8372696388f7d2a0b7f03c2d97f1",
"assets/icons/emoji_dancing_girl.png": "b132e24b4d5048bc11369f0d2a8a0322",
"assets/icons/balance_info_icon.svg": "88abdc2770d1b8e7df3551afa481f746",
"assets/icons/emoji_alarm_clock.png": "11d90550bfa3c0dbd22e64b1eb66ce7f",
"assets/icons/catalog_filter-ico.svg": "5e3e7b9460c713b0dd9438eb66859594",
"assets/icons/icon_dance_styles.png": "a6ed12e6f4b28a6dac881254b1c2af78",
"assets/icons/inbox_icon.svg": "659ae2198ecdb19fadba3a8da6082577",
"assets/icons/close-pop-up-ico.svg": "843e3f79bce74ec5a814ba5570cb7887",
"assets/icons/emoji_male.png": "db6595005a054b006564e625d8a1ab43",
"assets/icons/everdance_onboarding_logo.png": "45189f224eeb306fb60788ec8315cbdd",
"assets/icons/back-ico.png": "357985929555914a46e1bcdc26034060",
"assets/icons/arrow_white_shadow.png": "0ef02115583934aa341ea3778a792de2",
"assets/icons/edit_lesson_ico.png": "8ffbc6041c50dd68b86d452097935271",
"assets/icons/info_circle_ico.svg": "ea392dfdf3dd1ff77a766018ff6fb98d",
"assets/icons/guided_programs.svg": "29f16359e4bad166a05e55e364aeee00",
"assets/icons/item_checked.png": "b1ef9bd21b07e291050864927cca6381",
"assets/icons/level_intermediate.svg": "47d53712ab4b6d7a484b6cd11359a11c",
"assets/icons/emoji_dancing_man.png": "477302bb23569a2384360f101813e92f",
"assets/icons/dart_icon.png": "9db133a1b7861f765e1a7660cae6b65c",
"assets/icons/arrow_white_icon.png": "0cb9defe9f3d960cc1fde36298265212",
"assets/icons/dot_white_between.png": "eb726f7665dcb09b986569d6c782c83e",
"assets/icons/emoji_brokkoli.png": "99c631006ebc1596d1efd163256a6261",
"assets/icons/bookmarks-active-ico.svg": "3b30fba0bf9229243b9fee9289e7907e",
"assets/icons/emoji_water_drop.png": "174b7a207bb9093d8b31335305055ce7",
"assets/icons/emoji_plant.png": "980bd2ede8fc4101eb36bfd61a73e8b1",
"assets/icons/emoji_strawberry.png": "08df7a2a661b2daed53f35ab5d0bad6e",
"assets/icons/emoji_girl.png": "0a4ce219717352d3b9c97a549587e248",
"assets/icons/bookmarks-default-ico.svg": "4ffaee1caaa8ca307f86aa415838084d",
"assets/icons/locked_ico.svg": "107b3dec51b2bc0805f6a2f6bf942386",
"assets/icons/oops-ico.svg": "d53ba4d789fc5dfd86e97302f424f8a9",
"assets/icons/emoji_sunglasses.png": "451005bec77f1befe6733e1743a9e709",
"assets/icons/emoji_turkey.png": "81c1621f7acab1f68fc65397bb9fe95b",
"assets/icons/everdance.gif": "d31105a18642ae866dab1ab578cf2d3d",
"assets/icons/emoji_glasses.png": "66d61a30e5d25140846d961790e34acb",
"assets/icons/fire.png": "257208efa54b142310bda4c7b30c758d",
"assets/icons/dots_vertical.svg": "87e8c00454ee48593527f18dd915618d",
"assets/icons/emoji_zzz.png": "32a3ca6abdcb36d24653bdd57eb6f4e0",
"assets/icons/error_loading_video.png": "0b30f114311738aa15133f312d9e67b5",
"assets/icons/edit_icon.png": "c84ef71c85ba56e1d9dc3955b06f7c75",
"assets/icons/glow_up.png": "d61cf3c3371db0a4335e3570955d5fad",
"assets/icons/noposts-ico.svg": "a634b8be17bb96fde74a916ae962a3b7",
"assets/icons/lock.svg": "90e61a529ecd720434e538151bba8e37",
"assets/icons/fire.svg": "9d18643ffa718c652246cc205ad6ae37",
"assets/icons/icon_description.png": "7d80f22b8aa1a395daca994e0009f23d",
"assets/icons/emoji_student.png": "00bf279f0198a0ce4a18e7b680550471",
"assets/icons/male.png": "bb6c249f7ad6d7b3b4a9191d69daff35",
"assets/icons/class-ico.png": "95f240249bc397c6021efb6bf36f2bd7",
"assets/icons/continue_forward.svg": "472d9abf22618d51d78e889d0ce33833",
"assets/icons/emoji_cake.png": "07ce5659ee3d599f16a7ad1ceb1cc45b",
"assets/icons/class_ico.svg": "79d9f179760e3cc9f15a91cc55642d37",
"assets/icons/bookmarks-default-ico.png": "a7010d02571ffcfa351b2c21b10aa90f",
"assets/icons/classes_icon.svg": "a58fe950be7f9a65120df53c5581c09e",
"assets/icons/filters-ico.png": "b483defeb7e4ebec4a38d2e5287a804f",
"assets/icons/non-binary.png": "6a372802a04361e7e36bb9dbf5ae13a1",
"assets/icons/emoji_smirk.png": "683ca8978468206ade230337f65f463e",
"assets/icons/go-ico-grey.png": "5dcdf8395e8e723c0b06d48c67ece0b2",
"assets/icons/level_advanced.svg": "9754da4f95edd27a45a6c6e47d1a2b29",
"assets/icons/check_icon.svg": "f960b0d276694408cf67b89482f9d71e",
"assets/icons/emoji_sun.png": "ab2e88d33d64c5a5e67b2feb5dc9e416",
"assets/icons/emoji_chest.png": "aa3f49ecdaa7d99e90f04dad1cc23eb1",
"assets/icons/arrow_white_icon.svg": "b08274140484a6c2646eb65100f1362c",
"assets/icons/nothing.png": "6ea21a171e4433557e5c38bee5b59155",
"assets/icons/emoji_chronometer.png": "f9cc03a3d17e3ec6712ad9e40fdaedda",
"assets/icons/man_icon.svg": "897d27503a9036355d491c56a12de822",
"assets/icons/back-ico.svg": "cb7f4f883bc31debec8e0c663c7d1150",
"assets/icons/everdance_onboarding_logo.svg": "c56179142fa08173d9db9c800d9c10d0",
"assets/icons/emoji_coffee.png": "0b36e9f2230059aae8344223f19b517c",
"assets/icons/fb_ico_round.svg": "ab539b6bfb637c8edb4816dc2716156c",
"assets/icons/email_ico.png": "9ac8c7b5b78f00e2ce2a5fbb6620e381",
"assets/icons/inbox_icon_inactive.svg": "4eea096f1f6def23107b3a92773278c3",
"assets/icons/go-ico.png": "52bc752aef78a5169561fc4ef33f453b",
"assets/icons/clear_icon.png": "ec0dab69d211611a6d97f495c4bea3c1",
"assets/icons/emoji_salt.png": "e1c8973a5526cbc4e6ef35197b39c2cf",
"assets/icons/emoji_fire.png": "1a33d8c342255f849822bfa97fe546df",
"assets/icons/glow_down.png": "4f45a6579858c4d260e6ce662cbc9d58",
"assets/icons/bookmarks-filled-ico.png": "87e0d2d4fb10acf31987bd087a34b784",
"assets/icons/copy-icon.png": "4e6f059906619f4faa5d2233816d2dc2",
"assets/icons/block-post-ico.png": "6992328db563ba4222e218ed1277d9b6",
"assets/icons/gender_male_ico.svg": "7c406c0e48fe8d0b8185a4f32168e469",
"assets/icons/house_round_ico.png": "55d4d72ea431c250cad53777d9544532",
"assets/icons/bookmark_ico.png": "5f3710c3d4fbc24046fd1696d410b796",
"assets/icons/female.png": "c79b6e3203cbe7c64d3d2ccf39ee65cd",
"assets/icons/level_beginner.svg": "15cb3dc2e7b8d4b5f484168701247a6a",
"assets/icons/emoji_chickens_leg.png": "986226ac7ad0915de7c9b618722e3dca",
"assets/icons/emoji_water_bottle.png": "a11a13a6e984795d8b90ba5d8e92e5b9",
"assets/icons/gender_female_ico.svg": "aa2e29495b43adf106bf6b714b78a27f",
"assets/icons/emoji_star.png": "ec1806e7229611cccf81bebf0c12de21",
"assets/icons/icon_website.png": "3c24fbef467ee178e0479e8d9e696605",
"assets/icons/short_drills.png": "1be7f2ba8f70067687b277b8c1fa6de4",
"assets/icons/arrow_black_icon.png": "935c9f7a875e2ca5598b90a3e9c0ff30",
"assets/icons/carousel_right_arrow.png": "c0a20074d24bc89bdf5183da4dd71d15",
"assets/icons/block-account-ico.png": "c86771ac61992cc654acfd535a7b38c7",
"assets/icons/duet-ico.png": "2694c46d51acc8eadd2f36926bec6c84",
"assets/icons/emoji_non_binary.png": "7dd71ab03b48c9329a4c54e1b8f5daff",
"assets/icons/cross.png": "f99ccc2264dd5a65f0c398ec635ab14e",
"assets/icons/emoji_yoga.png": "8b06645dc522795db60c0086f2c5fc06",
"assets/icons/carousel_left_arrow.png": "f33ba238e2f2c983d75f8e2202c8c8e6",
"assets/icons/emoji_water_glass.png": "6585a9f274f450b47d86ae20fd283a3d",
"assets/icons/emoji_sunrise.png": "0501ecc3ed4cc54ef18eeedf9465ba6d",
"assets/icons/emoji_back.png": "8638ea76c41c3740b7327ec4b90b761a",
"assets/icons/next_step_icon.svg": "bfb77a7ddc81169bb7e143bafa0c70d5",
"assets/icons/fb-ico.png": "047e6ff7bab3ccb719771b2b4f5a2893",
"assets/icons/background_profile_icon.svg": "342cc17b11256f3a4ae25710df9b0b2f",
"assets/icons/studio_length.png": "5d29952f26f91e6a3db047bda00266b3",
"assets/icons/close_onboarding_icon.png": "fcc8c8b7ff816d55de9528de81b393ce",
"assets/icons/back_arrow_bottom.svg": "d430385af0bb2c5837be66cadda0109c",
"assets/icons/g-ico.png": "b7ac97e69ae58f4d8d9b15205f6a5eaa",
"assets/icons/bookmarks-ico.png": "37808ec50326dc5536208b780abad366",
"assets/icons/main_photo.png": "8cc9e9ec8de66514a764ac475c88aaa6",
"assets/icons/clock_icon.png": "4d36bdf4773301cc092ef0a3e307bbc7",
"assets/icons/emoji_moon.png": "dd565cf597befea3b03c3affa2808e30",
"assets/icons/free_program_access.png": "c3d393a495a05a9415dbc3ae05d9ad92",
"assets/icons/key_note.png": "4f3b4abaf55af73c21f8bb65f9314b8a",
"assets/icons/classby-ico.png": "e8b1ede38d4bda2aa576d2b05ff5fac9",
"assets/icons/clock.svg": "06760d02786a20e5ee496a73696a92f1",
"assets/icons/block-video-ico.png": "ae67dee12258a98564ea0de89bfa8716",
"assets/icons/back_arrow_bottom.png": "98af3e8b7206c2a80f3b093ffbe33684",
"assets/icons/emoji_smile.png": "5172ea866f674b75cd29b40bbdadc50d",
"assets/icons/quick_sessions.png": "23a43c8fc949da3ca297b0dcc8ac066b",
"assets/icons/gender_non_binary_ico.svg": "c353a6c01a34254fb8d6052a8f90204b",
"assets/icons/post-ico.png": "5c23cce27aef0c0af578ed56c00282f8",
"assets/icons/feedback_icon.svg": "f180f8c191efd1c31dc65e4c4467a7c8",
"assets/icons/background_profile_icon.png": "4672ae592b60cf3051be0e9c866a8b89",
"assets/icons/clear-ico_shadow.svg": "f5a9e65ff1636265d3a51fef83d1d5c4",
"assets/icons/emoji_acrobathic.png": "cb135195e715a5d67cabd51dd2fe2acb",
"assets/icons/emoji_coctail.png": "18fab34ed91ba0fa0a8792c888ecf418",
"assets/icons/emoji_belly.png": "1d9585ab959c42ce4bceccc354451edd",
"assets/icons/ios_icon.png": "5d8711c3eec36cc3f7edcfac5f124501",
"assets/icons/classes_icon_inactive.svg": "af1c5304c924cb6d00dddbdd0dc49d86",
"assets/icons/bookmark-analytics-ico.svg": "18e9a38d9c09aa1d3a72cb33b7cccd5f",
"assets/icons/emoji_stop_it.png": "0e5f83516cdadc56f84b19f2dcb88806",
"assets/icons/lock_icon.png": "2039edbf33da6e7ef7325ff6a344cc14",
"assets/icons/ops-ico.png": "a1b6e1303c3a164ab7a62c2750771c8b",
"assets/icons/selected_ico.svg": "7b34e849891598b9c42355b873cdbfc4",
"assets/icons/clear_popup_icon.png": "f24d0ed2a767ab5294af74d180672da0",
"assets/icons/emoji_strong.png": "6e8229346d103b4336459ea725bcba13",
"assets/icons/no_internet_connection.png": "737c52f788c6a42eabf64b2df8a9c130",
"assets/icons/popup-menu-ico.png": "c540b16d5cbe914473ed3a30c8232a27",
"assets/icons/emoji_stars.png": "1f440b011df2904ff45931b9cbf0f5d0",
"assets/icons/instructor_switch_icon.svg": "1bdd519c8d4a62e875ceb0c9b6a5e0de",
"assets/icons/clear-ico.svg": "29a37a92fe367fa5eba96fc51009d33b",
"assets/icons/copy-link-ico.png": "e1c1175e9ac1a4d275b039fb18f9b784",
"assets/icons/emoji_dancing_girls.png": "8330cc6ac9cf6426349abc61439c8d46",
"assets/icons/back.png": "f78900ffff4dd3a35c221038726faad2",
"assets/icons/emoji_bed.png": "7f438602030fa9ddd6f7da7dd0995475",
"assets/icons/emoji_foot.png": "65d288f0852c699950e5cf4b5b333964",
"assets/icons/back_arrow_user_profile.png": "14a5301ca99db39764ee6ae6d006d76f",
"assets/icons/emoji_female.png": "8f9ef25a64aa3c54c9cc5bc57d230e40",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "aa1ec80f1b30a51d64c72f669c1326a7",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5178af1d278432bec8fc830d50996d6f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b37ae0f14cbc958316fac4635383b6e8",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/fonts/Montserrat-LightItalic.ttf": "dadd3c3bf4846aa66cf350a26b253f50",
"assets/fonts/sf-ui-text-regular.ttf": "0cfc29e3e69f8d0a6083fed65510eba4",
"assets/fonts/Montserrat-Medium.ttf": "41940db30d513f31c9adbf15f4a98a76",
"assets/fonts/sf-ui-text-bold.ttf": "47f0620f3790e38f621a9fbeb8eed066",
"assets/fonts/Montserrat-BoldItalic.ttf": "45014625eaedf18b1b5fbe63caa80064",
"assets/fonts/Montserrat-Light.ttf": "ba044963492ff3ec7755d1117661a360",
"assets/fonts/Montserrat-ThinItalic.ttf": "5cd51f31feb03cd98e765f62ceef9fb3",
"assets/fonts/Montserrat-ExtraLight.ttf": "490fa183366c13649dfa99ab55c583cc",
"assets/fonts/Montserrat-Thin.ttf": "2597559f3f979e5d8bd947eac5a94af7",
"assets/fonts/Montserrat-Bold.ttf": "bf2c26d2b14e3fc3b9f065fb308866c8",
"assets/fonts/Montserrat-MediumItalic.ttf": "5c7f99074234e7c7db89a588614fe9b9",
"assets/fonts/Montserrat-BlackItalic.ttf": "f9d1621e8aaf9b26d3d26092e7a7a632",
"assets/fonts/sf-ui-text-medium.ttf": "82c3bad5b014ba458378f24a3037be2a",
"assets/fonts/sf-ui-text-semibold.ttf": "21e502e335e964784bc8e88223768014",
"assets/fonts/Montserrat-SemiBold.ttf": "aebf4fe19e37e3d508a8f6950f9378d1",
"assets/fonts/Montserrat-ExtraLightItalic.ttf": "cf9a7578398f9cc84d010a52bcc50d6b",
"assets/fonts/Montserrat-ExtraBold.ttf": "2a3d13e3cafb3f088e5a4b3c9ff435cb",
"assets/fonts/sf-ui-display-black.ttf": "419d8838ed6c4a885f23a30886f2b37e",
"assets/fonts/Montserrat-Black.ttf": "594626363a3b93b3fe22e039e66448c4",
"assets/fonts/Montserrat-Regular.ttf": "08a754d1d68f4671eab5e11ece77cd03",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/fonts/Montserrat-Italic.ttf": "c47cfa55a714f756f49f6c74b9da14ec",
"assets/fonts/sf-ui-text-light.ttf": "31a44cfffdacc9ef283f0f4f6353a9ce",
"assets/fonts/Montserrat-SemiBoldItalic.ttf": "74fbdb736c8c84bb98735510d092d887",
"assets/fonts/Montserrat-ExtraBoldItalic.ttf": "428f1389af3038385bb834208ea5043b",
"assets/assets/cfg/app_settings.json": "7f0a13471cb82792b1dedbad11b57f30",
"app.js": "c2ebec47949db5b5a99b7054bac467dc",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
