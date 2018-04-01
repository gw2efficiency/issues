### 2018-04-01

**Chores**

- *General:* Added chairs
- *Account/Value:* Temporarily removed tradingpost orders from account value due to bugs in the official API ([Read more](https://github.com/gw2efficiency/issues/issues/943))

---

### 2018-03-29

**Chores**

- *Account/Characters:* Added back the link to SAB unlocks
- *Supporters:* Update donators and patrons list
- *General:* Marked "Claw of the Khan-Ur" as a legendary (statistics / crafting pages)

---

### 2018-03-24

**Chores**

- *Crafting/Calculator:* Updated recipes for [Sigil of Mischief](https://gw2efficiency.com/crafting/calculator/a~0!b~1!c~0!d~1-68436) (thanks to @CuriousCharr)
- *Crafting/Calculator:* Added recipes for [Mystical +9 Agony Infusion](https://gw2efficiency.com/crafting/calculator/a~0!b~1!c~0!d~1-86180) (thanks to @CuriousCharr)

---

### 2018-03-14

**Chores**

- *Crafting/Calculator:* Added recipe for [Claw of the Khan-Ur](https://gw2efficiency.com/crafting/calculator/a~0!b~1!c~0!d~1-87109)

---

### 2018-03-04

**Chores**

- *API Keys:* Improve and redesign the page layout
- *Internal:* Improve monitoring of host metrics
- *Supporters:* Update donators and patrons list

---

### 2018-02-26

**Features**

- *Account/Dyes:* Add the option to only show gemstore dyes
- *Account/Wardrobe:* Add a rarity filter and show rarity
- *General:* Improve caching of API requests on subsequent pageloads
- *Stats/Account Statistics:* Add statistic for PoF music boxes
- *Stats/Account Statistics:* Include fractal relics and pristine fractal relics from titles
- *Tradingpost/Overview:* Add the ability to sell partial investments

**Bugfixes**

- *Account/Search:* Include upgrades & infusions inside of bank/shared inventory equipment
- *Daily:* Fix extreme lag in Firefox when darkmode is enabled
- *Supporters:* Fix automatic update of the supporter status for Patreons

**Chores**

- *Account/Value:* Add value to Funerary Incense
- *Account/Value:* Add value to Gift of Blade recipes
- *Account/Value:* Add value to outfits converted from clothing tonics
- *Account/Value:* Update the gemstore items
- *Crafting/Calculator:* Add recipe for "Lucky Great Dog Lantern"
- *Crafting/Calculator:* Add recipe for "Mini Failed Attempt"
- *Daily:* Add Mystic Clovers to fractal dailies
- *General:* Add some spots to show supporter advantages
- *Supporters:* Update donators and patrons list

---

### 2018-02-06

**Features**

- *[Account/Farming](https://gw2efficiency.com/account/farming-tracker):* Add page to calculate your farming profit and display changes in your wallet and items ([Preview](https://i.imgur.com/T1h19je.gifv))

---

### 2018-02-06

**Features**

- *Stats/Unlock Statistics:* Add filter for skin armor weight
- *Stats/Player Statistics:* Add statistic for armor weight

---

### 2018-02-04

**Features**

- *Stats/Player Statistics:* Add more account types (core with no expansions, all expansions)

**Bugfixes**

- *Account/Achievements:* Remove HTML from achievement descriptions
- *Stats/Player Statistics:* Fix counting "Play For Free" status on accounts that got upgraded

**Chores**

- *Internals:* Improve performance for API routes that require the resolution of an API key
- *Internals:* Majorly improve intitial pageload performance for international locations
- *Internals:* Majorly improve backup procedure and data safety
- *Internals:* Improve scalability of services for the future
- *Supporters:* Update donators and patrons list

---

### 2018-01-30

**Features**

- *Lottery:* Enter supporters to all lotteries automatically
- [*Stats/Player Statistics:*](http://gw2efficiency.com/account/player-statistics) Add aggregated statistics for race, gender, profession and account type, by count and playtime

**Bugfixes**

- *Supporters:* Fix automatic update of the supporter status for Patreons
- *Account/Miniatures & Recipes:* Fix redirect to the wiki when clicking on an item icon

**Chores**

- *Supporters:* Update donators and patrons list
- *Account/Value:* Update the gemstore items
- *Stats/Account Statistics:* Blacklist support-cheaters from all leaderboards (this can take up to 48 hours)
- *Internals:* Enabled HTTP/2 (this should make things load slightly faster)

---

### 2018-01-23

**Features**

- *Stats/Unlock Statistics:* Add additional filter capabilities
  - Weapon & armor type for skins
  - Discipline for recipes
  - Category for achievements
- *Stats/Unlock Statistics:* Add additional search capabilities
  - `term term` to include results with both terms (in any order)
  - `"term term"` to include results with both terms in the exact order
  - `-term` to exclude results with the term

**Bugfixes**

- *Account/Achievements:* Fix achievements with a Crystal Desert mastery point not showing an icon
- *Stats/Unlock Statistics:* Fix wrongly whitelisted skins being displayed

---

### 2018-01-20

**Features**

- [*Stats/Unlock Statistics:*](http://gw2efficiency.com/account/unlock-statistics) Add page showing the rarity of account unlocks based on the entire playerbase (for achievements, cats, dyes, finishers, gliders, mailcarriers, miniatures, nodes, outfits, recipes, skins, titles)

**Bugfixes**

- *Account/Characters:* Fix wrong character birthdays due to leap year calculation

**Chores**

- *Daily:* Add "Windswept Haven Guild Hall" to "Gathering" tasks
- *Daily:* Add "Sunspear Cache Run" to "Domain of Istan" tasks
- *Dungeons/Raids:* Add "Hall of Chains" (thanks to @CuriousCharr)
- *Supporters:* Update donators and patrons list

---

### 2018-01-01

**Features**

- *Daily:* Add a daily Zommoros' fortune
- *User/Account:* Show the current supporter status for donators & patreons
- *Lottery:* Add back the normal montly lottery

**Chores**

- *Supporters:* Update donators and patrons list

---

### 2017-12-22

**Features**

- *General:* Add "action" dropdown when clicking on any item icons ([Preview](https://i.imgur.com/sgqw04p.gifv))
- *Account/Statistics:* Add new player statistics
  - Kralkatite Ore
  - Winter Wonderland Completions
- *Account/Overview:* Also filter by item description when searching

**Bugfixes**

- *Crafting/Calculator:* Fix Ars Goetia not including it's precursors in the crafting tree
- *Crafting/Overview:* Fix link to crafting calculator
- *Daily:* Fix overlapping text in other languages than English

**Chores**

- *Dungeons/Fractals:* Update fractal levels
- *Account/Value:* Add value to some account bound halloween miniatures
- *Supporters:* Update donators and patrons list

---

### 2017-12-03

**Features**

- *Account/Statistics:* Add new player statistics
  - Festive Confetti Infusions (also counts as an aura)
  - Unstable Cosmic Essences
  - Gaeting Crystals
  - Volatile Magic

**Bugfixes**

- *Account/Achievements:* Fix the crystal desert mastery point filter
- *Account/Value:* Fix some legendary skins counting their precursor skin value twice
- *Account/Wallet:* Fix text formatting for Elegy Mosaic
- *Community/Lottery:* Fix GUIDs not being accepted for lottery entries
- *General:* Fix the nightmode icon not displaying in browsers that don't support emojis
- *General:* Remove the dot in the navigation for mobile users
- *Nightmode:* Fix copy/paste buttons being invisible
- *Nightmode:* Fix highlight of expensive materials being nearly invisible

**Chores**

- *Account/Statistics:* Improve item detection for "Celesital Infusions"
- *Account/Wallet:* Add sprites for new currencies
- *Crafting/Calculator:* Add recipes for "The Binding of Ipos"
- *Crafting/Calculator:* Add recipes for WvW and PvP legendary armors
- *Supporters:* Update donators and patrons list

---

### 2017-12-01

**Features**

- *Lottery:* Add the yearly advent calendar 🎅

**Chores**

- *Supporters:* Update donators and patrons list

---

### 2017-11-12

**Bugfixes**

- *Currencies/Claim Tickets:* Fix "War God's Skins" not showing up for conversion ([#837](https://github.com/gw2efficiency/issues/issues/837))
- *Account/Cats:* Fix description for "Super-Hot Saffron-Scented Poultry Soup" cat

**Chores**

- *Account/Value:* Update the gemstore items

---

### 2017-10-24

**Features**

- *Account/Statistics:* Add Crystal Desert mastery point statistics
- *Account/Characters:* Add detection and images for PoF character specializations
- *Gathering:* Show current & total gold on gathering process bar
- *Account/Achievements:* Show achievement groups/categories as completed when all AP are achieved
- *Daily:* Add seasonal daily achievements (e.g. Halloween)

**Bugfixes**

- *Currencies/Spirit Shards:* Fix the promotion result count of "Piles of Radiant Dust"
- *Account/Statistics:* Fix legendary insight count for more than one armor-set ([#788](https://github.com/gw2efficiency/issues/issues/788))
- *Daily:* Show possible dailies of all extensions
- *Daily:* Fix completed dungeons not resetting correctly ([#828](https://github.com/gw2efficiency/issues/issues/828))

**Chores**

- *Account/Value:* Update the gemstore items
- *Account/Value:* Add value to items in the Black Lion Exclusives Chest
- *Account/Value:* Add value to legendary recipes sold by Miyani ([#813](https://github.com/gw2efficiency/issues/issues/813))

---

### 2017-10-08

**Features**

- *Account/Achievements:* Add PoF mastery icons and filters
- *Account/Achievements:* Show available/total achievement points for groups and categories
- *Account/Characters:* Add a filter by crafting discipline filter
- *Crafting/Calculator:* Show crafting profit for each recipe in the recipe tree if multiple recipes are added

**Bugfixes**

- *General (Supporters):* Fix "supporters" status not being applied to patreons of the current month
- *Tradingpost/Overview:* Fix some search queries not rendering correctly

**Chores**

- *Account/Statistics:* Add missing chak infusions

---

### 2017-10-04

**Features**

- *General (Supporters):* Patreons now automatically get their account upgraded to "supporters" when they link the same email they used on patreon. Supporters do not get advertisements.

---

### 2017-10-01

**Features**

- *Account/Statistics:* Add "Ascended Shards of Glory", "Trade Contracts", "Elegy Mosaics" and "Testimony of Heroics" to the player statistics
- *Community/Lottery:* Group past monthly lotteries with multiple daily giveaways together

**Bugfixes**

- *Account/Achievements:* Fix SAB achievements not appearing in "Historical"
- *Account/Characters:* Fix sharing of deleted or renamed shared characters

**Chores**

- *Account/Value:* Update the gemstore items
- *Supporters:* Update donators and patrons list

---

### 2017-09-18

**Features**

- *General:* All pages with filters can now persist them in the URL and be linked to with preselected filters (for example [the cheapest locked home nodes](https://gw2efficiency.com/account/home-nodes)). (Supported pages in question are Daily, Account > Overview, Account > Characters, Account > Character, Account > Guild, Account > PvP, Account > Achievements, Account > Wardrobe, Account > Miniatures, Account > Dyes, Account > Recipes, Account > Pvp Heroes, Account > Mailcarriers, Account > Outfits, Account > Finishers, Account > Home Nodes, Account > Home Cats, Account > Gliders, Account > Tonics, Currencies > Dungeon Tokens, Currencies > Spirit Shards, Currencies > Karma, Currencies > Badges of Honor, Currencies > Gems, Currencies > Laurels, Currencies > Guild Commendations, Currencies > Claim Tickets, Tradingpost > Overview, Tradingpost > Current Transactions, Tradingpost > Delivery Box, Tradingpost > Transaction History, Worldbosses, Dungeons, Crafting > Precursors & Legendaries, Crafting > Ascended Weapons & Armor, Gathering)
- *Currencies/Gems:* Add the ability to calculate conversions by entering the desired result
- *Account/Achievements:* Show linked titles
- *Account/Achievements:* Show total and remaining collection cost

**Chores**

- *Supporters:* Update donators and patrons list

---

### 2017-09-10

**Bugfixes**

- *Crafting/Calculator:* Move the crafting calculator link to a different format, which supports longer recipe lists ([#814](https://github.com/gw2efficiency/issues/issues/814))
- *General:* Fix error splash when hovering over an unknown item ([#817](https://github.com/gw2efficiency/issues/issues/817))

**Chores**

- *Supporters:* Update donators and patrons list
- *General:* Reduce the download size of the website by roughly 75%

---

### 2017-09-02

**Features**

- *Account/Characters:* Change to tabular design with more condensed information ([#31](https://github.com/gw2efficiency/issues/issues/31))
- *Crafting/Calculator:* Include amounts and options (material price, use own materials, etc.) into the share link ([#258](https://github.com/gw2efficiency/issues/issues/258))
- *Account/Statistics:* Add "Orrian Pearls" to the player statistics ([#810](https://github.com/gw2efficiency/issues/issues/810))
- *Crafting/Calculator:* Add the option to sort the shopping list by price & quantity

**Bugfixes**

- *Account/Characters:* Fix wrong character birthdays due to leap year
- *Account/Gemstore Unlocks:* Add bag upgrades (previously counted to each characters' value)
- *Account/PvP:* Fix the rank point requirement for low ranks
- *Account/Value:* Exclude beta characters from the account value
- *Crafting/Calculator:* Use the selling price of items if the buy price does not exist (and vice versa) ([#272](https://github.com/gw2efficiency/issues/issues/272))
- *General:* When linking to the wiki, use the wiki of the user's language

**Chores**

- *Account/Statistics:* Add non-counted liquid aurillium infusions
- *Account/Value:* Update the gemstore items
- *Crafting/Calculator:* Add recipes for Gifts of PvP / WvW legendary armour
- *Daily:* Add the fractal challenge motes to the fractal dailies
- *Gathering:* Update the optimal order for nodes
- *Supporters:* Update donators and patrons list
- *Translations:* Update the Portuguese and Russian translations ([#791](https://github.com/gw2efficiency/issues/issues/791), [#796](https://github.com/gw2efficiency/issues/issues/796))

---

### 2017-08-20

**Features**

- *Daily:* Ignore changing dailies inside hidden groups, causing the group to stay hidden
- *Daily:* Add a toggle to expand / collapse all group
- *Daily:* Automatically reload official dailies on daily reset
- *Daily:* Import completion status of dungeon dailies in an interval instead of on pageload
- *Daily:* Show a timeline/heatmap of completed dailies
- *Account/Recipes:* Show the icon of the output instead of the recipe icons
- *Account/Minis:* Open the wiki when clicking on a mini
- *Account/Dyes:* Add a wiki link for each dye
- *Account/Achievements:* Add the ability to filter mastery points by their region

**Bugfixes**

- *Daily:* Fix the t1-3 fractal dailies not being filtered out for some languages
- *Account/Recipes:* Add "Jeweler" as a filter option

**Chores**

- *Account/Home Cats:* Add the missing home instance cats
- *Gathering:* Add missing permanent gathering nodes ([#781](https://github.com/gw2efficiency/issues/issues/781), [#749](https://github.com/gw2efficiency/issues/issues/749))
- *Contributors:* Update the list of patreons and donators
- *Account/Value:* Update gemstore items

---

### 2017-08-13

**Features**

- *Daily:* Added a page to manage daily cooldowns ([#62](https://github.com/gw2efficiency/issues/issues/62))

**Chores**

- *General:* Added a countdown to the expansion with our affiliate link

---

### 2017-08-06

**Features**

- *Tradingpost/Delivery Box:* Add a page to show the current delivery box, including auto-refresh and notifications
- *Account/Gemstore Account Upgrades:* Add a page to see all gemstore items of the account (reachable from the account overview)
- *Account/Statistics:* Add legendary trinkets, liquid aurillium and celestial infusions
- *Account/Statistics:* Exclude statistics from game masters
- *General:* Persist login sessions after server crashes (after this release)
- *General:* Update the donation buttons

**Bugfixes**

- *General:* Fix the client sometimes initializing with a invalid API key
- *General:* Fix the dashboard for russian languages ([#786](https://github.com/gw2efficiency/issues/issues/786))

**Chores**

- *Account/Cats:* Add Simon the celestial cat ([#787](https://github.com/gw2efficiency/issues/issues/787))
- *Account/Value:* Add value to new ascended items

---

### 2017-08-01

**Features**

- *Account/Tonics:* Add a page to show acquired tonics on the account
- *Account/Value:* Add items and coins up for collection in the tradingpost

**Chores**

- *Account/Value:* Update gemstore items
- *Dungeons:* Update fractal level islands

---

### 2017-07-24

**Features**

- *Account/PvP Heroes:* Add page for showing unlocked pvp heroes on the account
- *Account/Mailcarriers:* Add page for showing unlocked mailcarriers on the account
- *Account/Outfits:* Add page for showing unlocked outfits on the account
- *Account/Finishers:* Add page for showing unlocked finishers on the account
- *Account/Gliders:* Add page for showing unlocked gliders on the account
- *Account/Home Nodes:* Add page for showing unlocked home instance nodes on the account
- *Account/Home Cats:* Add page for showing unlocked home instance cats on the account
- *Account/Shared Inventory:* Add page for showing the shared inventory
- *Account/Statistics:* Add "luck" to the player statistics (as the sum from essence items) (Thanks to [@atjeff](https://github.com/atjeff))
- *Account/Recipes:* Open the wiki when clicking on a recipe

---

### 2017-07-23

**Features**

- *Account/Recipes:* Add page for showing unlocked recipes on the account
- *General:* Improve the night mode rendering on all pages
- *Account/Statistics:* Include legendary insights from items, e.g. legendary armor (Thanks to [@atjeff](https://github.com/atjeff)) ([#678](https://github.com/gw2efficiency/issues/issues/678))

**Bugfixes**

- *Account/Miniatures:* Fix ordering when choosing name, rarity or order

**Chores**

- *Account/Statistics:* Update items for tonics and champion bags
- *Supporters:* Update the list of donators and patreons

---

### 2017-07-04

**Features**

- *General:* Add a first rough nightmode ([#51](https://github.com/gw2efficiency/issues/issues/51))

**Bugfixes**

- *Account/Dyes:* Fix dye sets for gemstore dyes missing ([#775](https://github.com/gw2efficiency/issues/issues/775))
- *Account/Characters:* Fix sharing for accounts with spaces ([#776](https://github.com/gw2efficiency/issues/issues/776))
- *Account/PvP:* Fix rating limits for new season ([#777](https://github.com/gw2efficiency/issues/issues/777))
- *Account/Statistics:* Fix pvp statistics to always use the current season ([#777](https://github.com/gw2efficiency/issues/issues/777))

---

### 2017-07-01

**Features**

- *Account/Value:* Add unlocked pvp heroes into the calculation ([#773](https://github.com/gw2efficiency/issues/issues/773))
- *Account/Value:* Add unlocked mailcarriers into the calculation ([#773](https://github.com/gw2efficiency/issues/issues/773))
- *Account/Value:* Add unlocked home instance nodes into the calculation ([#773](https://github.com/gw2efficiency/issues/issues/773))
- *Account/Value:* Add unlocked gliders into the calculation ([#773](https://github.com/gw2efficiency/issues/issues/773))

**Chores**

- *Crafting/Calculator:* Add recipes for Warbringer and Warcry ([#762](https://github.com/gw2efficiency/issues/issues/762))
- *Account/Value:* Add new gemstore items ([#774](https://github.com/gw2efficiency/issues/issues/774))

---

### 2017-06-11

**Features**

- *Account/Statistics:* Add PvP Heroes, Mailcarriers, Gliders, Immortal Weapons, Mastery Points Earned ([#767](https://github.com/gw2efficiency/issues/issues/767))

---

### 2017-06-10

**Features**

- *Account/Statistics:* Add Legendary Spikes, Gifts of Battle, Legendaries based on Type ([#755](https://github.com/gw2efficiency/issues/issues/755))
- *Crafting/Legendaries:* Add "type" filter ([#758](https://github.com/gw2efficiency/issues/issues/758))

**Bugfixes**

- *Account/Statistics:* Fix a mixup of a phospholuminescent infusion and a luminescent refractor ([#763](https://github.com/gw2efficiency/issues/issues/763))

**Chores**

- *Account/Statistics:* Add "Infinite Unbound Magic Gathering Tools" to the list of gemstore tools ([#761](https://github.com/gw2efficiency/issues/issues/761))
- *Account/Value:* Add missing item values for ascended items from the first and second raid wings, fractals, world vs world and living world ([#756](https://github.com/gw2efficiency/issues/issues/756))
- *Crafting/Legendaries:* Add legendary armor to the legendary crafting tab ([#757](https://github.com/gw2efficiency/issues/issues/757))
- *Crafting/Calculator:* Add recipes for the "Warbringer" backpack components ([#759](https://github.com/gw2efficiency/issues/issues/759))
- *Account/Value:* Update gemstore items ([#760](https://github.com/gw2efficiency/issues/issues/760))
- *Crafting/Ascended:* Add Caladbolg Regrown weapons to the ascended crafting tab ([#750](https://github.com/gw2efficiency/issues/issues/750))

---

### 2017-05-20

**Features**

- *General:* Show exact missing permission on the API key page ([#736](https://github.com/gw2efficiency/issues/issues/736))
- *Account/Characters:* Add ordering by next birthday to the character page ([#739](https://github.com/gw2efficiency/issues/issues/739))
- *General:* Show decimals for appropriate statistics on graphs ([#734](https://github.com/gw2efficiency/issues/issues/734))
- *General:* Add "g/s/c" when copying gold values out fo the website ([#730](https://github.com/gw2efficiency/issues/issues/730))

**Bugfixes**

- *General:* Fix the range selector sizing for charts with long labels ([#725](https://github.com/gw2efficiency/issues/issues/725))
- *Gathering:* Fix that hiding some gathering nodes hid multiple nodes ([#742](https://github.com/gw2efficiency/issues/issues/742))
- *General:* Fix parsing dates on Safari, e.g. in the investment tracker ([#743](https://github.com/gw2efficiency/issues/issues/743))

**Chores**

- *Crafting/Calculator:* Update mystic forge recipes, including "Perfected Envoy" sets and "Flames of War" legendary ([#740](https://github.com/gw2efficiency/issues/issues/740))
- *Account/Value:* Add new gemstore items ([#737](https://github.com/gw2efficiency/issues/issues/737))

---

### 2017-05-16

**Bugfixes**

- *General:* Fix the session expiring when the browser gets closed
- *General:* Fix logout not working with slow API response times
- *General:* Fix some links pointing to HTTP instead of HTTPS

---

### 2017-05-14

**Bugfixes**

- *General:* Fix encoding issues for all new API requests
- *General:* Fix form targeting for some versions of Firefox
- *General:* Fix login names being wrongly case-sensitive

---

### 2017-05-13

**Internals**

- *General:* Refactor the last parts of the backend ([#24](https://github.com/gw2efficiency/issues/issues/24))
- *General:* Find and migrate to a new server and hoster ([#682](https://github.com/gw2efficiency/issues/issues/682))
- *General:* Clean up the repository history ([#311](https://github.com/gw2efficiency/issues/issues/311))

---

### 2017-04-08

**Features**

- *Account/SAB:* Show progression of characters for the Super Adventure Box zones, unlocks and songs

---

### 2017-04-02

**Features**

- *Lottery:* Show the contestants and draw date for daily lotteries ([#720](https://github.com/gw2efficiency/issues/issues/720))
- *Account/Achievements:* Add a filter for hidden achievements ([#715](https://github.com/gw2efficiency/issues/issues/715))

**Bugfixes**

- *Crafting/Calculator:* Fix crafts without a daily cooldown showing up in the daily breakdown ([#719](https://github.com/gw2efficiency/issues/issues/719))
- *Dungeons:* Fix daily completion for story dungeons ([#722](https://github.com/gw2efficiency/issues/issues/722))

**Chores**

- *Account/Guild:* Add the new SAB upgrades ([#721](https://github.com/gw2efficiency/issues/issues/721))
- *Account/Value:* Add new gemstore items ([#723](https://github.com/gw2efficiency/issues/issues/723))

---

### 2017-04-01

**Features**

- *Lottery:* :rabbit: Add the Easter lottery

---

### 2017-03-14

**Bugfixes**

- *Account/PvP:* Handle past pvp seasons with ratings instead of divisions ([#713](https://github.com/gw2efficiency/issues/issues/713))
- *Crafting/Calculator:* Fix searching for short items (e.g. "Bo") ([#712](https://github.com/gw2efficiency/issues/issues/712))

---

### 2017-03-13

**Features**

- *User/API keys:* Sort API keys by added date. This essentially reverts the last change, since ordering them alphabetically broke the flow for more users than expected ([#710](https://github.com/gw2efficiency/issues/issues/710))

**Chores**

- *Crafting/Calculator:* Add new daily cooldowns for the grandmaster marks ([#711](https://github.com/gw2efficiency/issues/issues/711))

---

### 2017-03-09

**Features**

- *User/API keys:* Order API keys alphabetically by account name ([#709](https://github.com/gw2efficiency/issues/issues/709))

**Chores**

- *Account/Statistics:* Update the pvp statistics to the new league ([#708](https://github.com/gw2efficiency/issues/issues/708))
- *Account/Value:* Add new gemstore items ([#707](https://github.com/gw2efficiency/issues/issues/707))

---

### 2017-03-03

**Features**

- *Account/Statistics:* Add ascended materials to player statistics ([#704](https://github.com/gw2efficiency/issues/issues/704))
- *Dungeons:* Show "Dungeon Frequenter" status on dungeon page ([#703](https://github.com/gw2efficiency/issues/issues/703))

**Bugfixes**

- *Account/Achievements:* Remove flavor code from achievement descriptions ([#705](https://github.com/gw2efficiency/issues/issues/705))
- *Dungeons:* Fix hidden dungeons not resetting correctly ([#706](https://github.com/gw2efficiency/issues/issues/706))

---

### 2017-03-02

**Features**

- *Dungeons:* Add raid information with automatic weekly completion status ([#700](https://github.com/gw2efficiency/issues/issues/700))

**Features**

- *Dungeons:* Toggle daily completion status of dungeons automatically ([#699](https://github.com/gw2efficiency/issues/issues/699))
- *Account/Statistics:* Add "Unlocked Home Cats" to the player statistics ([#698](https://github.com/gw2efficiency/issues/issues/698))
- *Account/Statistics:* Add "Unlocked Home Nodes" to the player statistics ([#697](https://github.com/gw2efficiency/issues/issues/697))
- *Account/Statistics:* Add "Gifts of Exploration" to the player statistics ([#696](https://github.com/gw2efficiency/issues/issues/696))
- *Crafting/Recipe Overview:* Add pagination buttons to the bottom of the page ([#688](https://github.com/gw2efficiency/issues/issues/688))
- *General:* Make desaturated buttons slightly more visible ([#689](https://github.com/gw2efficiency/issues/issues/689))
- *Community/Lottery:* Handle lottery entries with multiple API keys more smoothly ([#692](https://github.com/gw2efficiency/issues/issues/692))

**Bugfixes**

- *Crafting/Precursors & Legendaries:* Fix precursors of generation 2 legendaries being ignored if "craft precursors" was set to "no" ([#694](https://github.com/gw2efficiency/issues/issues/694))

**Chores**

- *Account/Value:* Add new gemstore items ([#690](https://github.com/gw2efficiency/issues/issues/690))
- *Crafting/Calculator:* Add recipes for new Caladbolg weapons ([#693](https://github.com/gw2efficiency/issues/issues/693))

---

### 2017-02-18

**Features**

- *Account/Statistics:* Add "Jade Shards" to the player statistics ([#684](https://github.com/gw2efficiency/issues/issues/684))

**Bugfixes**

- *Account/Statistics:* Fix Eternity not being counted as a legendary item or legendary skin ([#683](https://github.com/gw2efficiency/issues/issues/683))

---

### 2017-02-16

**Features**

- *Account/Guild:* Add the initial gold price to guild upgrades ([#276](https://github.com/gw2efficiency/issues/issues/276))
- *Account/Search:* Add the option to filter by equipment status ([#675](https://github.com/gw2efficiency/issues/issues/675))
- *Account/Search:* Add the option to group item into one stack ([#679](https://github.com/gw2efficiency/issues/issues/679))
- *Account/Statistics:* Add "Black Lion Miniature Claim Tickets" to the player statistics ([#669](https://github.com/gw2efficiency/issues/issues/669))
- *Account/Statistics:* Use the account age instead of the sum of all character ages ([#667](https://github.com/gw2efficiency/issues/issues/667))

**Bugfixes**

- *General:* Fix export to Excel not triggering a download in Firefox ([#652](https://github.com/gw2efficiency/issues/issues/652))

**Chores**

- *Account/Statistics:* Add "Infinite Repair Contract" to the permanent contracts statistic ([#668](https://github.com/gw2efficiency/issues/issues/668))
- *Account/Value:* Add Living World Season 1 reward values ([#654](https://github.com/gw2efficiency/issues/issues/654))
- *Account/Value:* Add new gemstore items ([#676](https://github.com/gw2efficiency/issues/issues/676))
- *Crafting/Calculator:* Add new mystic forge recipes ([#677](https://github.com/gw2efficiency/issues/issues/677))
- *Crafting/Calculator:* Add recipe for "The HMS Divinity" ([#671](https://github.com/gw2efficiency/issues/issues/671))
- *Crafting/Calculator:* Fix minor recipe inconsistencies for generation 2 legendaries ([#672](https://github.com/gw2efficiency/issues/issues/672))

**Internals**

- *General:* Update the translations ([#670](https://github.com/gw2efficiency/issues/issues/670))

---

### 2017-01-22

**Features**

- *Dungeons*: Migrate the dungeon page to a temporary daily page
- *Chat*: Move to a public [Discord](https://discord.gg/ZgKdTra)

**Internals**

- Move currency, gathering, world bosses, sharing, dungeons and lottery into the new backend ([#24](https://github.com/gw2efficiency/issues/issues/24))

---

### 2017-01-07

**Features**

- *Account/PvP:* Show league rating change for ranked games ([#649](https://github.com/gw2efficiency/issues/issues/649))

**Chores**

- *Account/Statistics:* Include missing gemstore toy items ([#648](https://github.com/gw2efficiency/issues/issues/648))

---

### 2017-01-06

**Features**

- *Account/Achievements:* Exclude dailies from the "available" display if the daily cap is reached ([#644](https://github.com/gw2efficiency/issues/issues/644))
- *Account/Achievements:* Exclude historic achievements when using the "Earnable AP" filter ([#638](https://github.com/gw2efficiency/issues/issues/638))
- *Account/Achievements:* Show level and extenstion requirement for daily achievements ([#195](https://github.com/gw2efficiency/issues/issues/195))
- *Account/Statistics:* Add player statistics for "Koda's Warmth Enrichment" ([#647](https://github.com/gw2efficiency/issues/issues/647))
- *Account/Statistics:* Add player statistics for "Phospholuminescent Infusion" ([#645](https://github.com/gw2efficiency/issues/issues/645))
- *Account/Statistics:* Add player statistics for "Winter's Heart Infusions" ([#646](https://github.com/gw2efficiency/issues/issues/646))
- *Account/Statistics:* Add player statistics for gemstore toys ([#612](https://github.com/gw2efficiency/issues/issues/612))
- *Account/Statistics:* Add player statistics for pvp league rating ([#642](https://github.com/gw2efficiency/issues/issues/642))
- *Tradingpost/Overview:* Add the total ROI percentage ([#635](https://github.com/gw2efficiency/issues/issues/635))

**Chores**

- *Account/Statistics:* Update the item ids for "Preserved Queen Bee" ([#641](https://github.com/gw2efficiency/issues/issues/641))
- *Account/Value:* Add values to the new PvP ascended gear ([#636](https://github.com/gw2efficiency/issues/issues/636))
- *Crafting/Calculator*: Add recipes for legendary armor pieces ([#617](https://github.com/gw2efficiency/issues/issues/617))

**Internals**

- Fix the server getting slow when the job log gets full ([#643](https://github.com/gw2efficiency/issues/issues/643))

---

### 2017-01-05

**Bugfixes**

- *General:* Fix a potential security issue - a user could see if an email existed in the database by mass-requesting password resets and looking at the error messages

**Chores**

- *General:* Trial new ad network and layouts
- *Community/Lottery:* Add the 2016 Christmas lottery to the past lotteries

---

### 2017-01-01

**Features**

- *Community/Lottery:* Add the regular lottery back

---

### 2016-12-23

**Features**

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

**Features**

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

- *Community/Lottery:* Add the christmas lottery :santa:

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
- *General:* Move historical issues into the public repository ([#312](https://github.com/gw2efficiency/issues/issues/312))

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

**Features**

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

**Features**

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

**Features**

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

**Features**

- *Account/Overview:* Add hover for character values, showing detailed information ([#239](https://github.com/gw2efficiency/issues/issues/239))

---

### 2016-09-21

**Features**

- *Account/Guilds:* Add new guild upgrades ([#237](https://github.com/gw2efficiency/issues/issues/237))

**Bugfixes**

- *Account/Statistics:* Fix rank number overlap on Firefox ([#232](https://github.com/gw2efficiency/issues/issues/232))

**Chores**

- *Backend:* Fix the mail server ([#231](https://github.com/gw2efficiency/issues/issues/231))
- *Crafting/Calculator:* Add the recipe for the new legendary, Eureka
- *Translations:* Deploy the translation updates

---

### 2016-09-14

**Features**

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

**Features**

- *Account/Overview:* Add last update display and refresh button
- *Account/Overview:* Fix chart tooltip sometimes clipping below the legend

---

### 2016-08-17

**Features**

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

**Features**

- *Community/Chat:* Add the ability for custom emojis
- *Community/Chat:* Add `/me` action messages

**Bugfixes**

- *Community/Chat:* Fix notification spam in some cases

---

### 2016-08-12

**Features**

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

**Features**

- *Guides:* Update the system that handles the guides ([#189](https://github.com/gw2efficiency/issues/issues/189))

**Chores**

- *Guides:* Release a new guide for AB-MultiMaps ([#189](https://github.com/gw2efficiency/issues/issues/189))

---

### 2016-07-31

**Features**

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

**Features**

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

- *Account/Value:* Remove value of "Grand Weapon Crate", "Chest of Insignia" and "Chest of Loyalty" ([#158](https://github.com/gw2efficiency/issues/issues/158))
- *Crafting/Calculator:* Remove recipe for "Glob of Coagulated Mists Essence" and "Shard of Crystallized Mists Essence" ([#155](https://github.com/gw2efficiency/issues/issues/155))

---

### 2016-06-22

**Bugfixes**

- *Tradingpost/Current Transactions:* Fix buy/sell order overbid notification for equal values
- *Crafting/Calculator:* Fix recipes for specialisation weapons

---

### 2016-06-21

**Features**

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

**Features**

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

**Features**

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

**Features**

- *Account/PvP:* Show season and division name on hover for past seasons ([#135](https://github.com/gw2efficiency/issues/issues/135))

---

### 2016-05-19

**Features**

- *Crafting/Legendaries:* Add the new season of legendaries
- *Account/Character:* Add stat selectable item stats

---

### 2016-05-16

**Bugfixes**

- *Crafting/Calculator:* Fix styling for high quantities in the shopping list

---

### 2016-05-10

**Features**

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
