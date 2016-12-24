### 2016-12-23

**Enhancements**

- *Account/PvP:* Update the PVP panel for the new league system ([#618](https://github.com/gw2efficiency/issues/issues/618))
- *Account/Achievements:* Move completed achievements to the bottom ([#629](https://github.com/gw2efficiency/issues/issues/629))
- *Account/Achievements:* Clarify the "random achievement" button ([#630](https://github.com/gw2efficiency/issues/issues/630))
- *Crafting/Calculator:* Take shared inventories into account ([#623](https://github.com/gw2efficiency/issues/issues/623))
- *General:* Retry account names if api key invalid ([#631](https://github.com/gw2efficiency/issues/issues/631))

**Chores**

- *Account/Value:* Update the gemstore items ([#633](https://github.com/gw2efficiency/issues/issues/633))
- *Account/Wallet:* Add icon for "Shard of Ascended Glory" ([#624](https://github.com/gw2efficiency/issues/issues/624))
- *Crafting/Calculator:* Add recipes for "Mini Large Snowball" and similar ([#632](https://github.com/gw2efficiency/issues/issues/632))
- *Crafting/Calculator:* Fix the "Fractal Capacitor" parts in Unbound ([#627](https://github.com/gw2efficiency/issues/issues/627))
- *Crafting/Calculator:* Add missing components for "Chest of Experimental Armor" ([#616](https://github.com/gw2efficiency/issues/issues/616))
- *General:* Add two small footer ads for trial. [Read more about the ads here.](https://www.reddit.com/r/gw2efficiency/comments/5jx5cc/trialling_ads_on_gw2efficiency/)

---

### 2016-12-21

**Bugfixes**

- *General:* Fix Firefox locking up on cache garbage collection ([#625](https://github.com/gw2efficiency/issues/issues/625))

---

### 2016-12-18

**Bugfixes**

- *Account/Characters:* Fix API keys getting incorrectly required in the character overview

**Internals**

- Improve the monitoring for backend jobs ([#253](https://github.com/gw2efficiency/issues/issues/253))

---

### 2016-12-17

**Bugfixes**

- *Account/Statistics:* Fix player leaderboards failing to generate in some cases ([#619](https://github.com/gw2efficiency/issues/issues/619))

**Internals**

- Make sure that child jobs get queued even if parent jobs die

---

### 2016-12-14

**Bugfixes**

- *Account/Statistics:* Fix some statistics getting generated with too many decimal points ([#613](https://github.com/gw2efficiency/issues/issues/613))
- *Account/Statistics:* Fix the "Mastery Points" statistics not taking into account all mastery points ([#614](https://github.com/gw2efficiency/issues/issues/614))
- *Crafting/Calculator:* Fix "use own materials" failing when the crafted item is the result of an achievement ([#621](https://github.com/gw2efficiency/issues/issues/621))

**Chores**

- *Crafting/Calculator:* Update the recipe for "Endless Princess Doll Tonic" ([#622](https://github.com/gw2efficiency/issues/issues/622))

---

### 2016-12-09

**Enhancements**

- *Account/Achievements:* Hide daily achievements for the "Earnable AP" filter if the daily cap is reached ([#304](https://github.com/gw2efficiency/issues/issues/304))
- *Account/Guilds:* Add an icon to show which guilds you are leading ([#602](https://github.com/gw2efficiency/issues/issues/602))
- *Account/Overview:* Add an OpenSearch descriptor for the account search ([#210](https://github.com/gw2efficiency/issues/issues/210))
- *Account/Statistics:* Add player statistics for Fresh Winterberries ([#606](https://github.com/gw2efficiency/issues/issues/606))
- *Account/Statistics:* Add player statistics for mastery points ([#607](https://github.com/gw2efficiency/issues/issues/607))
- *Account/Statistics:* Order leaderboards by descending playtime if there are ties ([#603](https://github.com/gw2efficiency/issues/issues/603))
- *Account/Statistics:* Show shared rank behavior more clearly on the leaderboard ([#604](https://github.com/gw2efficiency/issues/issues/604))
- *Account/Statistics:* Show the leaderboard for all values ([#605](https://github.com/gw2efficiency/issues/issues/605))
- *Account/Wardrobe:* Add a little lock icon for skins that are hidden ingame ([#305](https://github.com/gw2efficiency/issues/issues/305))
- *Crafting/Calculator:* Add the ability to export shopping lists to Excel ([#159](https://github.com/gw2efficiency/issues/issues/159))
- *General:* Show the "charges" of some items (e.g. gathering tools) ([#601](https://github.com/gw2efficiency/issues/issues/601))
- *Tradingpost/Overview:* Add tooltips to the items ([#596](https://github.com/gw2efficiency/issues/issues/596))

**Bugfixes**

- *Account/Characters:* Fix shared characters incorreclty requesting the API key ([#610](https://github.com/gw2efficiency/issues/issues/610))
- *Account/Overview:* Fix search failing if the account did not fully load yet ([#308](https://github.com/gw2efficiency/issues/issues/308))
- *Crafting/Calculator:* Fix shopping list item names sometimes overlapping ([#598](https://github.com/gw2efficiency/issues/issues/598))
- *Crafting/Calculator:* Fix the tooltip sometimes not reloading the correct item data on subsequent hovers ([#187](https://github.com/gw2efficiency/issues/issues/187))
- *Currencies/Gems:* Fix the gem to gold conversion not rerendering correctly ([#600](https://github.com/gw2efficiency/issues/issues/600))

**Chores**

- *Crafting/Calculator:* Add the recipes for "Koda's Warmth Enrichment" ([#609](https://github.com/gw2efficiency/issues/issues/609))
- *Crafting/Calculator:* Add the recipes for "Memories of the Mother" & "Memories of the Father" ([#608](https://github.com/gw2efficiency/issues/issues/608))
- *Crafting/Calculator:* Add the recipes for "Mini Aurine" ([#310](https://github.com/gw2efficiency/issues/issues/310))
- *Crafting/Calculator:* Fix the "Lava Skull Backpack (Infused)" recipe ([#309](https://github.com/gw2efficiency/issues/issues/309))
- *Currencies/Spiritshards:* Fix "Cured Thick Leather Square" only using 3 instead of 4 raw components ([#595](https://github.com/gw2efficiency/issues/issues/595))

---

### 2016-12-07

**Bugfixes**

- *Community/Chat:* Fix emojis not rendering correctly

---

### 2016-12-01

**Bugfixes**

- *Account/Keys:* Fix account names for API keys ([#597](https://github.com/gw2efficiency/issues/issues/597))

---

### 2016-11-30

**Features**

- *General:* Add the christmas lottery :santa:

**Bugfixes**

- *General:* Fix Firefox freezing for a lot of API calls
- *Account/Statistics:* Fix playerbase statistics not getting generated

---

### 2016-11-29

**Bugfixes**

- *General:* Fix the tooltip not closing in one case ([#545](https://github.com/gw2efficiency/issues/issues/545))

**Chores**

- *General:* Switch over to the new internal API client
- *General:* Finish refactor of the generic internal backend ([#13](https://github.com/gw2efficiency/issues/issues/13))
- *General:* Move historic issues into the public repository ([#312](https://github.com/gw2efficiency/issues/issues/312))

---

### 2016-11-22

**Chores**

- *Account/Value:* Update the list of gemstore items
- *Crafting/Calculator:* Add the recipes for the new legendary shield "Shooshadoo"

---

### 2016-11-20

**Bugfixes**

- *Crafting/Calculator:* Fix completed crafting steps lingering ([#163](https://github.com/gw2efficiency/issues/issues/163))

**Chores**

- *Account/Value:* Update the list of gemstore items ([#298](https://github.com/gw2efficiency/issues/issues/298))
- *Account/Statistics:* Update the list of permanent tonics ([#303](https://github.com/gw2efficiency/issues/issues/303))

---

### 2016-11-10

**Enhancements**

- *Currencies/Karma:* Add a toggle for the component price ([#297](https://github.com/gw2efficiency/issues/issues/297))
- *Account/Statistics:* Add more player statistics: Tomes of Knowledge, Blood Rubies, Petrified Wood, Permanent contracts ([#260](https://github.com/gw2efficiency/issues/issues/260))
- *Account/Overview:* Add the ability to filter by item value ([#29](https://github.com/gw2efficiency/issues/issues/29))

**Bugfixes**

- *General:* Fix the datetime format in charts for some languages ([#293](https://github.com/gw2efficiency/issues/issues/293))
- *Currencies/Dungeons & Dungeons/Overview:* Fix the amount of daily dungeon tokens ([#296](https://github.com/gw2efficiency/issues/issues/296))

**Chores**

- *Account/Value:* Add a value to "Mini Oxidecimus the Shadow Raven" ([#292](https://github.com/gw2efficiency/issues/issues/292))

---

### 2016-11-06

**Enhancements**

- *Account/Overview:* Include guild banks into the account search ([#283](https://github.com/gw2efficiency/issues/issues/283))
- *Account/Overview:* Allow searching for upgrades in items ([#267](https://github.com/gw2efficiency/issues/issues/267))
- *Account/Wardrobe:* Add gold and gem value in the tooltip ([#257](https://github.com/gw2efficiency/issues/issues/257))
- *Tradingpost/Listings:* Improve the summarization of tradingpost listings ([#190](https://github.com/gw2efficiency/issues/issues/190))
- *Account/Achievements:* Add a filter for achievements, which can still give points ([#262](https://github.com/gw2efficiency/issues/issues/262))
- *Crafting/Calculator:* Improve the recipes using fossilized insects ([#261](https://github.com/gw2efficiency/issues/issues/261))
- *Community/Contributors:* Clean up the layout ([#287](https://github.com/gw2efficiency/issues/issues/287))

**Bugfixes**

- *Account/Overview:* Fix the binding status for character equipment ([#289](https://github.com/gw2efficiency/issues/issues/289))
- *Currencies/Dungeon Tokens:* Update the tokens per run to the new values ([#281](https://github.com/gw2efficiency/issues/issues/281))
- *Crafting/Calculator:* Fix the recipe for "Eternal Sand" ([#278](https://github.com/gw2efficiency/issues/issues/278))
- *Crafting/Calculator:* Fix the recipe for "Old Tom" ([#271](https://github.com/gw2efficiency/issues/issues/271))

**Chores**

- *Layout:* Add mobile favicons ([#268](https://github.com/gw2efficiency/issues/issues/268))
- *Layout:* Unify the branding to the single spelling of "gw2efficiency" ([#291](https://github.com/gw2efficiency/issues/issues/291))
- *Account/Statistics:* Reneabled the crawling of accounts

---

### 2016-11-04

**Bugfixes**

- *Account/Overview:* Fix the page not loading on Microsoft Edge

---

### 2016-11-03

**Features**

- *Guides:* Add a new fractal level 40 farm guide ([#286](https://github.com/gw2efficiency/issues/issues/286))

**Chores**

- Improve the build process of  all internal modules ([#277](https://github.com/gw2efficiency/issues/issues/277))

---

### 2016-10-29

**Chores**

- *Translations:* Deploy the new Russian translations ([#280](https://github.com/gw2efficiency/issues/issues/280))
- *Translations:* Deploy the translation updates ([#280](https://github.com/gw2efficiency/issues/issues/280))
- *Gemstore:* Add new offers ([#274](https://github.com/gw2efficiency/issues/issues/274))

---

### 2016-10-04

**Bugfixes**

- *Tradingpost/History:* Fix the missing listing / order price ([#266](https://github.com/gw2efficiency/issues/issues/266))

---

### 2016-09-28

**Bugfixes**

- *Account/Overview:* Fix the search failing if the user has items which are not whitelisted in the API yet

---

### 2016-09-27

**Features**

- *Account/Overview:* Add more filters to the account search ([#59](https://github.com/gw2efficiency/issues/issues/59))

---

### 2016-09-27

**Bugfixes**

- *Account/PvP:* Fix the amount of rank points needed for advancing ranks

---

### 2016-09-26

**Features**

- *Account/Statistics:* Add more player statistics ([#242](https://github.com/gw2efficiency/issues/issues/242))

---

### 2016-09-25

**Bugfixes**

- *Account/Value:* Fix some miss-priced gemstore items and added missing value to some skins ([#245](https://github.com/gw2efficiency/issues/issues/245))
- *Tradingpost:* Add "Guild Catapult" to the tradingpost blacklist ([#213](https://github.com/gw2efficiency/issues/issues/213))
- *Crafting/Calculator:* Fix misbehaving recipe for "Lesser Vision Crystal" ([#241](https://github.com/gw2efficiency/issues/issues/241))
- *Crafting/Calculator:* Add a vendor price to "Orichalcum Mining Pick" ([#193](https://github.com/gw2efficiency/issues/issues/193))
- *Crafting/Calculator:* Fix the build order for precursor recipes - they now require the "Spirit of ..." items first ([#207](https://github.com/gw2efficiency/issues/issues/207))
- *Account/Achievements:* Take filtering into account when choosing a random achievement ([#236](https://github.com/gw2efficiency/issues/issues/236))
- *Tradingpost/Transactions:* Fix the missing listing / order price ([#247](https://github.com/gw2efficiency/issues/issues/247))
- *Crafting/Calculator:* Fix the wiki link pointing to the wrong page for other languages than English ([#211](https://github.com/gw2efficiency/issues/issues/211))
- *Account/Dyes:* Fix "Bloodstone Dyes" not getting recognized as gemstore dyes ([#248](https://github.com/gw2efficiency/issues/issues/248))

---

### 2016-09-24

**Enhancements**

- *Account/Statistics:* Show last scan date and last standing generation date
- *Account/Statistics:* Massively improve performance for the generation of the live standings :fire_engine::fire: ([#249](https://github.com/gw2efficiency/issues/issues/249))
- *Graphs:* Show the local time instead of UTC on all graphs

---

### 2016-09-22

**Features**

- *Account/Statistics:* Add new batch of player statistics ([#112](https://github.com/gw2efficiency/issues/issues/112))
- *Account/Value:* Add gemstore items into the calculation ([#107](https://github.com/gw2efficiency/issues/issues/107))
- *Account/Value:* Add shared inventory slots into the calculation ([#1](https://github.com/gw2efficiency/issues/issues/1))
- *Account/Value:* Add infusions and upgrades into the calculation ([#107](https://github.com/gw2efficiency/issues/issues/107))
- *Account/Value:* Add unlocked recipes into the calculation ([#229](https://github.com/gw2efficiency/issues/issues/229))
- *Account/Value:* Add unlocked outfits into the calculation ([#228](https://github.com/gw2efficiency/issues/issues/228))
- *Account/Value:* Add unlocked finishers into the calculation ([#227](https://github.com/gw2efficiency/issues/issues/227))
- *Account/Value:* Add account unlocks into the calculation ([#184](https://github.com/gw2efficiency/issues/issues/184))
- *Account/Value:* Add crafting professions into the calculation ([#111](https://github.com/gw2efficiency/issues/issues/111))
- *Account/Value:* Add bag values into the calculation ([#108](https://github.com/gw2efficiency/issues/issues/108))

**Enhancements**

- *Account/Overview:* Add hover for character values, showing detailed information ([#239](https://github.com/gw2efficiency/issues/issues/239))

---

### 2016-09-21

**Enhancements**

- *Account/Guilds:* Add new guild upgrades ([#237](https://github.com/gw2efficiency/issues/issues/237))

**Bugfixes**

- *Account/Statistics:* Fix rank number overlap on Firefox ([#232](https://github.com/gw2efficiency/issues/issues/232))

**Chores**

- *Backend:* Fix the mail server ([#231](https://github.com/gw2efficiency/issues/issues/231))
- *Crafting/Calculator:* Add the recipe for the new legendary, Eureka
- *Translations:* Deploy the translation updates

---

### 2016-09-14

**Enhancements**

- *Account/Statistics:* Add a history for all statistics ([#220](https://github.com/gw2efficiency/issues/issues/220))
- *Account/Statistics:* Ignore keys that are went invalid ([#203](https://github.com/gw2efficiency/issues/issues/203))
- *Account/Statistics:* Fix some statistics generating with missing data ([#221](https://github.com/gw2efficiency/issues/issues/221))
- *Account/Statistics:* Improve page layout ([#217](https://github.com/gw2efficiency/issues/issues/217))
- *Account/Value:* Add value to more missing ascended items ([#173](https://github.com/gw2efficiency/issues/issues/173))

**Chores**

- *Backend:* Move to a more sophisticated server infrastructure ([#26](https://github.com/gw2efficiency/issues/issues/26))
- *Backend:* Move background jobs into a distributed, priority-queue based system ([#174](https://github.com/gw2efficiency/issues/issues/174))
- *Backend:* Integrated split code of gw2-api.com directly into the codebase ([#25](https://github.com/gw2efficiency/issues/issues/25))
- *Backend:* Renew the SSL certificate ([#218](https://github.com/gw2efficiency/issues/issues/218))

---

### 2016-09-11

**Bugfixes**

- *Community/Lottery:* Fix layout issues when the price names are too long
- *Dungeons:* Update the dungeon rewards to the current patch ([#206](https://github.com/gw2efficiency/issues/issues/206))
- *Account/Miniatures:* Fix rarity filter for miniatures ([#209](https://github.com/gw2efficiency/issues/issues/209))

---

### 2016-08-29

**Bugfixes**

- *Currencies/Claim Tickets:* Fix not loading the correct claim tickets because of wiki changes

**Chores**

- *Translations:* Deploy the translation updates

---

### 2016-08-21

**Bugfixes**

- *Account/Overview:* Fix loading issue when using the `www` subdomain

---

### 2016-08-18

**Enhancements**

- *Account/Overview:* Add last update display and refresh button
- *Account/Overview:* Fix chart tooltip sometimes clipping below the legend

---

### 2016-08-17

**Enhancements**

- *Account/Overview:* Improve the account overview graph ([#119](https://github.com/gw2efficiency/issues/issues/119))

**Chores**

- *Account/Overview:* Refactor the account value calculation into it's own module ([#12](https://github.com/gw2efficiency/issues/issues/12))
- *Account/Overview:* Include the new account value module into the frontend ([#201](https://github.com/gw2efficiency/issues/issues/201))

---

### 2016-08-17

**Chores**

- *Currencies/Karma:* Update the karma item salvaging rates to the latest patch ([#128](https://github.com/gw2efficiency/issues/issues/128))

---

### 2016-08-16

**Chores**

- *Guides:* Release a new guide for tradingpost flipping
- *Translations:* Deploy the translation updates

---

### 2016-08-13

**Enhancements**

- *Community/Chat:* Add the ability for custom emojis
- *Community/Chat:* Add `/me` action messages

**Bugfixes**

- *Community/Chat:* Fix notification spam in some cases

---

### 2016-08-12

**Enhancements**

- *Account/Guild:* Use crafting prices for accountbound upgrade ingredients ([#198](https://github.com/gw2efficiency/issues/issues/198))

**Bugfixes**

- *Account/Guild:* Fix total costs for upgrades not calculating

---

### 2016-08-11

**Bugfixes**

- *Community/Chat:* Fix submitting messages for Safari ([#200](https://github.com/gw2efficiency/issues/issues/200))

---

### 2016-08-11

**Chores**

- *Translations:* Deploy the new Portuguese translations
- *Translations:* Deploy the translation updates

---

### 2016-08-06

**Features**

- *Community/Chat:* Update the chat design ([#191](https://github.com/gw2efficiency/issues/issues/191))
- *Community/Chat:* Show the online status for chat members ([#192](https://github.com/gw2efficiency/issues/issues/192))
- *Community/Chat:* Add colored chat nicks ([#17](https://github.com/gw2efficiency/issues/issues/17))
- *Community/Chat:* Add emojis into the chat ([#88](https://github.com/gw2efficiency/issues/issues/88))

**Chores**

- *Money:* Add buttons to donate with Patreon, Bitcoin and Flattr

---

### 2016-08-04

**Enhancements**

- *Guides:* Update the system that handles the guides ([#189](https://github.com/gw2efficiency/issues/issues/189))

**Chores**

- *Guides:* Release a new guide for AB-MultiMaps ([#189](https://github.com/gw2efficiency/issues/issues/189))

---

### 2016-07-31

**Enhancements**

- *Crafting/Calculator:* Add a wiki link for items in the crafting tree ([#162](https://github.com/gw2efficiency/issues/issues/162))
- *Tradingpost:* Fix the date field for investments and history ([#67](https://github.com/gw2efficiency/issues/issues/67))
- *Account/Guild:* Make the guild roster sortable ([#180](https://github.com/gw2efficiency/issues/issues/180))
- *Account:* Require current password on password changes ([#27](https://github.com/gw2efficiency/issues/issues/27))
- *Tradingpost/Current Transactions:* Show a total listing price / order price column ([#171](https://github.com/gw2efficiency/issues/issues/171))
- *Account/Guild:* Add the new guild hall upgrades ([#185](https://github.com/gw2efficiency/issues/issues/185))

**Bugfixes**

- *Currencies/Spiritshards:* Fix the recipe for Cragstone ([#179](https://github.com/gw2efficiency/issues/issues/179))
- *Crafting/Calculator:* Fix vendor items referring to their bulk items in the shopping list and calculations ([#175](https://github.com/gw2efficiency/issues/issues/175))
- *Crafting/Calculator:* Fix crafting quantity changing after adding & removing multiple recipes ([#176](https://github.com/gw2efficiency/issues/issues/176))
- *Currencies/Claim Tickets:* Fix not available items showing up in the list ([#188](https://github.com/gw2efficiency/issues/issues/188))

**Chores**

- *Community/Contributors:* Update the list of donators
- *Translations:* Get the translation server back up and running ([#161](https://github.com/gw2efficiency/issues/issues/161))
- *Translations:* Add missing translation flags ([#181](https://github.com/gw2efficiency/issues/issues/181))
- *Translations:* Deploy the current translations ([#182](https://github.com/gw2efficiency/issues/issues/182))

---

### 2016-07-02

**Enhancements**

- *Account/Value:* Add value to results of Ectoplasm gambling ([#2](https://github.com/gw2efficiency/issues/issues/2))
- *Account/Value:* Add value to the "Kaiser Snake" weapons & skins, inherited from their skin items ([#129](https://github.com/gw2efficiency/issues/issues/129))
- *Account/Value:* Add value to the ascended weapons & armour that either drop or can be bought from raids ([#5](https://github.com/gw2efficiency/issues/issues/5))

**Bugfixes**

- *Crafting/Calculator:* Remove "Gift of Battle" from the vendor items, since it can't be bought anymore ([#168](https://github.com/gw2efficiency/issues/issues/168))
- *Account/Wardrobe:* Fix the filter for "Spear" weapons not returning any results

**Chores**

- *Community/Contributors:* Update the list of donators
- *Changelog:* Link to the changelog

---

### 2016-06-23

**Bugfixes**

- *Account/Value:* Remove value of "Grand Weapon Crate", "Chest of Insignia" and "Chest of Loyality" ([#158](https://github.com/gw2efficiency/issues/issues/158))
- *Crafting/Calculator:* Remove recipe for "Glob of Coagulated Mists Essence" and "Shard of Crystallized Mists Essence" ([#155](https://github.com/gw2efficiency/issues/issues/155))

---

### 2016-06-22

**Bugfixes**

- *Tradingpost/Current Transactions:* Fix buy/sell order overbid notification for equal values
- *Crafting/Calculator:* Fix recipes for specialisation weapons

---

### 2016-06-21

**Enhancements**

- *Account/Guild:* Add the "Guild Enhancement: World Reward Tracks" upgrade

**Chores**

- *Account/Statistics:* Update the number of valid tracked accounts

---

### 2016-06-15

**Bugfixes**

- *Crafting/Calculator:* Fix recipes for "Chest of Concoctions" and "Chest of Rainbows"

---

### 2016-06-14

**Bugfixes**

- *Crafting/Calculator:* Fix achievement items getting ignored in some cases ([#160](https://github.com/gw2efficiency/issues/issues/160))

---

### 2016-06-06

**Enhancements**

- *Crafting/Calculator:* Add copying on click to the shopping list items ([#145](https://github.com/gw2efficiency/issues/issues/145))

**Bugfixes**

- *Currencies/Karma:* Fix wrong recipes for dye cooking ([#144](https://github.com/gw2efficiency/issues/issues/144))
- *Account/Characters:* Use correct icons for character professions ([#148](https://github.com/gw2efficiency/issues/issues/148))
- *Crafting/Calculator:* Fix achievement items counting twice in some cases ([#150](https://github.com/gw2efficiency/issues/issues/150))

---

### 2016-06-05

**Bugfixes**

- *Crafting/Legendaries:* Add "Tigris" to the list of precursors

---

### 2016-06-03

**Bugfixes**

- *Crafting/Calculator:* Fix "Yggdrasil" requiring "Machined Staff" twice

---

### 2016-06-02

**Enhancements**

- *Crafting/Calculator:* Add vendor items from master scribe ([#149](https://github.com/gw2efficiency/issues/issues/149))

**Bugfixes**

- *Crafting/Calculator:* Fix crafting steps not appearing in the right order in rare cases ([#151](https://github.com/gw2efficiency/issues/issues/151))
 
---

### 2016-05-31

**Chores**

- *Community/Contributors:* Update the list of donators

---

### 2016-05-30

**Bugfixes**

- *Crafting/Calculator:* Fix recipes for "Expertise in Advanced Axe Crafting", "Expertise in Advanced Short Box Crafting" and "Expertise in Advanced Pistol Crafting"

---

### 2016-05-29

**Bugfixes**

- *Crafting/Calculator:* Remove "Mushroom" from the tradingpost blacklist

---

### 2016-05-28

**Features**

- *Crafting/Recipe Overview:* Add a page for viewing all recipes ([#45](https://github.com/gw2efficiency/issues/issues/45))
- *Crafting/Calculator:* Include guild decorations into the calculation ([#141](https://github.com/gw2efficiency/issues/issues/141))

**Chores**

- *Community/Contributors:* Update the list of donators

---

### 2016-05-27

**Features**

- *Crafting/Calculator:* Include achievement progress into the calculation ([#104](https://github.com/gw2efficiency/issues/issues/104))

**Bugfixes**

- *Crafting/Calculator:* Fix price display for partially owned vendor items ([#140](https://github.com/gw2efficiency/issues/issues/140))
- *Account/Value:* Fix crawling not executing for accounts with specific dyes unlocked ([#139](https://github.com/gw2efficiency/issues/issues/139))
- *Account/Wardrobe:* Fix skin values sometimes falling back to buy prices too early ([#136](https://github.com/gw2efficiency/issues/issues/136))
- *Crafting/Calculator:* Add missing untradeable guild items to blacklist ([#132](https://github.com/gw2efficiency/issues/issues/132))

---

### 2016-05-23

**Bugfixes**

- *Crafting/Calculator:* Fix regression of some legendaries including their precursor twice
- *Crafting/Calculator:* Remove recipe for "Glob of Ectoplasm"

---

### 2016-05-22

**Enhancements**

- *Account/PvP:* Show season and division name on hover for past seasons ([#135](https://github.com/gw2efficiency/issues/issues/135))

---

### 2016-05-19

**Enhancements**

- *Crafting/Legendaries:* Add the new season of legendaries
- *Account/Character:* Add stat selectable item stats

---

### 2016-05-16

**Bugfixes**

- *Crafting/Calculator:* Fix styling for high quantities in the shopping list

---

### 2016-05-10

**Enhancements**

- *Account:* Add toggles for "value" to guild, materials, bank, dyes, miniatures and characters ([#28](https://github.com/gw2efficiency/issues/issues/28))
- *Account/Guild:* Show the gold stored in guild banks ([#3](https://github.com/gw2efficiency/issues/issues/3))
- *Crafting/Calculator:* Add checking off for shopping list items ([#93](https://github.com/gw2efficiency/issues/issues/93))

**Bugfixes**

- *Crafting/Calculator:* Fix resetting amount to one when using auto-update ([#130](https://github.com/gw2efficiency/issues/issues/130))
- *Account/Achievements:* Hide hidden achievements in the WvW category ([#129](https://github.com/gw2efficiency/issues/issues/129))
- *Crafting/Calculator:* Ignore buy offers below valid offer price ([#50](https://github.com/gw2efficiency/issues/issues/50))

---

### 2016-05-06

**Features**

- *Crafting/Calculator:* Add the ability to craft multiple items at the same time ([#94](https://github.com/gw2efficiency/issues/issues/94))
- *Changelog:* Keep a changelog for public reference

**Bugfixes**

- *Layout:* Fix the navigation being stuck in mobile mode in some cases ([#8](https://github.com/gw2efficiency/issues/issues/8))
- *Crafting/Calculator:* Remove "Black Lion Ticket" recipe
- *Crafting/Calculator:* Remove recipes for "Candy Corn Cob" and "Gift of Ascension" ([#124](https://github.com/gw2efficiency/issues/issues/124))
- *Crafting/Calculator:* Craft mystic clovers before any other steps ([#123](https://github.com/gw2efficiency/issues/issues/123))

**Chores**

- *Issues:* Move all issues to Github ([#4](https://github.com/gw2efficiency/issues/issues/4))
- *Community/Planned Features:* Point link to the new issue repository ([#115](https://github.com/gw2efficiency/issues/issues/115))
