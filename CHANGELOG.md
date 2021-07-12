### 2021-07-12

**Features**

- *Crafting/Calculator:* Prefix the filename for the Excel export with the name of the crafted item
- *Account/Value:* Ignore equipped legendary items of characters that have logged in after the release of the Legendary Armoury for the value calculation
  - *This change is necessary to prevent inflated account values due to the ability to duplicate legendary items over multiple characters. If will only heavily affect you if you have duplicate legendaries, since it will now count the skin value instead. Once the Legendary Armoury is supported by the official API, we will make the changes to count duplicate legendary items again.*

**Chores**

- *Translations:* Update German translations (Thanks to @holoxx)

### 2021-07-03

**Features**

- *General:* Add support for `OR` operator when searching to all search fields
  - *This means you can now filter e.g. your account with more intricate queries. An example would be `zojja or yassith` to find ascended gear of either stat.*
- *Stats/Account Statistics:* Add new account statistics
  - Dungeons -> Chest of Dungeoneering
  - Map currencies -> Tyrian Defense Seals
  - Keys -> Zephyrite Lockpicks
  - Keys -> Bandit Skeleton Keys
  - Keys -> Pact Crowbars
  - Keys -> Exalted Keys
  - Keys -> Vials of Chak Acid
  - Keys -> Machetes
  - Keys -> Trader's Keys
  - Keys -> Mistborn Keys
  - Keys -> Cache Keys
  - Strike Missions -> Blue Prophet Crystals
  - Strike Missions -> Green Prophet Crystals
  - Strike Missions -> Red Prophet Crystals
- *Stats/Player Statistics:* Add new interactive statistics for Race x Gender x Profession
- *Account/Overview:* Show the character specializations
- *Account/Character:* Show joined order on the story journal tab
- *Crafting/Calculator:* Add the ability to press enter to accept the first item search result

**Bugfixes**

- *Account/Overview:* Fix link to tradingpost sell orders linking to the buy orders
- *Account/Statistics:* Fix crawling being impacted for a long duration when the API mistakenly marks API keys as invalid

**Chores**

- *Crafting/Calculator:* Update crafting recipes
- *Account/Value:* Update gemstore items

### 2021-06-09

**Bugfixes**

- *Tradingpost/Transaction History:* Correctly round the average price for small copper amounts
- *General:* Fix some links navigating back to the homepage with some types of ads present on the page
- *General:* Fix some links being clickable before the target URL was evaluated

**Chores**

- *Translations:* Update German translations (Thanks to @holoxx)
- *Supporters & Contributors:* Update the list of supporters

---

### 2021-04-11

**Features**

- *Gathering:* Update the list of gathering nodes (Thanks to @Bahamut731lp and @msmolev!)

**Bugfixes**

- *Tradingpost/Investment History:* Fix rounding error when calculating profits

**Internals**

- *Account/Stats:* Backend crawling optimizations

---

### 2021-04-08

**Features**

- *Account/Character:* Show biography choices in the story journal
- *Crafting/Calculator:* Show a warning if sub-components are crafted in excess due to mismatching recipe output quantities
- *Crafting/Calculator:* Show a warning if the specified amount can not be crafted with the recipe
- *Currency/Spirit Shards:* Add ordering by total profit

**Bugfixes**

- *General:* Fix an issue where the modal was not positioned correctly in Firefox with active nightmode
- *Crafting/Calculator:* Fix the best crafting path not recalculating after changing the material price
- *Currencies/Spirit Shards:* Fix a price calculation error when components are unavailable
- *Crafting/Calculator:* Remove cyclic conversion recipes for ley-line essences

**Internals**

- *General:* Add more alerts for account crawling issues

**Chores**

- *Account/Statistics:* Add Endless Inner Demon Combat Tonic to unstable fractal essence statistic
- *Account/Value:* Add value to equipped legendary runes & sigils
- *Crafting/Calculator:* Add Gift of Gliding merchant price

---

### 2021-04-03

**Bugfixes**

- *Crafting/Calculator:* Fix crafting profit for multi-recipes with quantity > 1

**Internals**

- *Account/Stats:* Backend crawling optimizations

---

### 2021-03-12

**Internals**

- *General:* Improve our monitoring infrastructure
- *Supporters:* Handle failure from our payment providers more gracefully

---

### 2021-03-06

**Internals**

- *General:* Switch back to the gw2treasures CDN for serving icons

---

### 2021-03-03

**Internals**

- *General:* Switch over to the official CDN for serving icons

**Chores**

- *Supporters & Contributors:* Update the list of supporters

---

### 2021-02-23

**Internals**

- *Account/Stats:* Backend crawling optimizations

---

### 2021-01-27

**Internals**

- *Account/Stats:* Fix error message showing when crawling has not started yet on fresh keys
- *Account/Stats:* Backend crawling optimizations

---

### 2021-01-04

**Internals**

- *General:* Add alerts for checking API connectivity

**Chores**

- *Supporters & Contributors:* Update the list of supporters

---

### 2021-01-01

**Features**

- *Lottery:* Add the normal lottery back

**Chores**

- *General:* Update the legal notice to new managing company

---

### 2020-12-20

**Bugfixes**

- *Stats/Unlock Statistics:* Fix filter for achievement masteries ignoring locked/unlock filters

---

### 2020-12-19

**Features**

- *Crafting/Calculator:* Update crafting profit when crafting multiple recipes to be based of the sell price

**Chores**

- *Account/Mounts:* Update the list of mounts
- *Supporters & Contributors:* Update the list of supporters

---

### 2020-12-11

**Features**

- *Tradingpost/Overview:* Add a new chart for market depth in the item detail view

**Bugfixes**

- *General:* Fix an issue where nightmode settings were not persisted

**Chores**

- *Supporters & Contributors:* Update the list of supporters

---

### 2020-12-07

**Features**

- *Achievements:* Add a filter for "Rewards only"
- *General:* Default the nightmode settings to the configured preferred color scheme

**Bugfixes**

- *Crafting/Calculator:* Fix crafting profit not taking tradingpost tax into account when crafting multiple recipes
- *Timers:* Fix Drakkar timers starting 1 hour too late

**Chores**

- *Supporters & Contributors:* Update the list of supporters

---

### 2020-12-01

**Features**

- *Lottery:* Add the christmas lottery

---

### 2020-11-19

**Bugfixes**

- *General:* Fix a rogue job sending way too many API requests

**Chores**

- *Translations:* Update Spanish translations (Thanks to @Esartesu)

**Internals**

- *General:* Add much more logging for account crawling jobs

---

### 2020-11-17

**Bugfixes**

- *Stats/Account Statistics:* Disable the following statistics to see if they are the cause of 3x elevated crawling times
  - Progression -> Unlocked Skins (Weapons)
  - Progression -> Unlocked Skins (Armor)
  - Progression -> Unlocked Skins (Backpieces)

**Chores**

- *Translations:* Update German translations (Thanks to @holoxx)

---

### 2020-11-14

**Features**

- *Daily:* Add the ability to create custom dailies
- *Account/Character:* Add the ability to view and share the character story journal
- *Account/API keys:* Add the ability to customize the order and name of the API keys
- *Account/Characters:* Show playtime per day, deaths and deaths per hour on the characters overview
- *Account/Guild:* Add the ability to exclude owned resources from upgrade costs
- *Account/Overview & Stats:* Show which downscaled resolution the points on the chart are rendered at
- *Account/Recipes:* Add "Any" as a discipline filter
- *Account/Search:* Include items in tradingpost sell orders and delivery box
- *Account/Value:* Include build & equipment templates and build storage into the account gemstore upgrades
- *Crafting/Calculator:* Add a placeholder item for not-representable components
  - *This now allows recipes that require "any exotic/ascended X" as a component to partially work. This includes Antonina, Boneskinner's Spine, Old Ascalon, Salvation, Sikandar & True Mettle.*
- *Crafting/Calculator:* Make owned materials exportable to Excel
- *Crafting/Calculator:* Show total crafting profit when crafting multiple recipes
- *Daily & Timers:* Add Drakkar to the worldbosses
- *Daily:* Show the current daily activity for the "Daily activity participation" daily
- *Dungeons/Raids:* Show the current call of the mists buff
- *Gathering:* Add the ability to filter by region and type (ore, plants, trees)
- *Stats/Account Statistics:* Add 19 new statistics
  - Wealth -> Tradingpost Value (Buy Orders)
  - Wealth -> Tradingpost Value (Sell Orders)
  - Wealth -> Tradingpost Value (Delivery Box)
  - Currencies -> Festival Tokens
  - Currencies -> War Supplies
  - Currencies -> Unstable Fractal Essence (includes bought unlocks/items and discontinued "Unstable Cosmic Essence")
    - *This takes over the previous "Unstable Cosmic Essence" statistic. Since they can be converted 1:5 you will likely see a big initial jump.*
  - Raids -> Total Raid Tokens
  - Progression -> Unlocked Skins (Weapons)
  - Progression -> Unlocked Skins (Armor)
  - Progression -> Unlocked Skins (Backpieces)
  - Cosmetic Auras -> Frost Legion Infusions
  - Cosmetic Auras -> Abyssal Infusions
  - Cosmetic Auras -> Otter's Blessing Enrichments
  - Cosmetic Auras -> Celebratory Birthday Enrichments
  - Collectables -> Shiny Baubles
  - Collectables -> Emblem of the Avenger
  - Collectables -> Emblem of the Conqueror
  - Collectables -> Emblem of Tournament Victory
  - Collectables -> Emblem of Victory
- *Stats/Account Statistics:* When shift-clicking or clicking with the middle mouse button open statistics in a new tab
- *Stats/Unlock Statistics:* Add filter for achievement group & masteries
- *Tradingpost/Current Transactions:* Add button to one-click create investments from current buy orders
- *Tradingpost/Current Transactions:* Add optional automatic refresh
- *Tradingpost/Overview:* Add columns for crafting price & crafting profit to the detail view
- *Tradingpost/Overview:* Make the tradingpost overview available for non-logged-in users
  - *This also fixes an annoying issue where non-logged-in users were allowed to use the Delivery Box, Current Transactions, and Transaction History but could not reach the pages via the navigation.*
- *Tradingpost/Transaction History:* Add button to one-click create investments from historic buy orders
  - *When creating an investment from the collapsed view, the date of the first purchase is used as the investment date.*

**Bugfixes**

- *Account/Character:* Fix stats from upgrades of non-equipment items (underwater / armory) counting towards the total
- *Account/Farming Tracker:* Fix creating and canceling buy orders counting as profit and loss
- *Account/Overview & Stats:* Fix "Show Delta" checkbox clipping into the chart points occasionally
- *Account/Skins & Stats:* Remove a few unobtainable skins
- *Account/Time Machine:* Fix page not correctly rendering errors when something went wrong
- *Account/Value:* Value high-tier infusions at the value of their "Power" stat version
  - *This fixes the issue that high-value infusions, e.g. the Confetti Infusion, were not valued accurately if they were set to an uncommon stat without orders on the tradingpost.*
- *Account/Wallet:* Fix rendering sprites next to the quantity for newer currencies
- *Crafting/Calculator:* Fix the recipe for "Great Destroyer's Talon" not referencing the correct items
- *Daily:* Fix done dailies not counting into the total completion if hide done is checked
- *Gathering:* Fix Quartz gathering not being counted as ore
- *Gathering:* Fix flipped item output for two gathering nodes
- *Stats/Account Statistics:* Fix Slumbering Conflux & Transcendence not counting as legendaries
- *Stats/Unlock Statistics:* Fix duplicating Black Lion Garden Plot Deed when sorting gathering nodes

**Chores**

- *Account/Value:* Update the Black Lion Exclusives Chest
  - *As usual, this will cause a big spike in value if you own any of the items now inside the chest.*
- *Crafting/Calculator:* Add recipes for salvaging Extract of Nourishment
- *Gathering:* Add additional gathering nodes
- *Gathering:* Update optimal gathering route based on community feedback
- *General:* Add SAB to the top-level navigation (only shows in April)
- *General:* Optimize generated Excel files for better separator detection
- *Supporters & Contributors:* Update the list of supporters
- *User:* Add information about how to delete the account

**Internals**

- Add health checks to the worker containers (self-healing in case of problems)

---

### 2020-11-06

**Bugfixes**

- *Account/Time Machine:* Fix crash because of missing home node item in the API
- *Account/Home Nodes:* Fix 3rd garden plot not showing because of missing item in the API

**Chores**

- *Supporters & Contributors:* Update the list of supporters

---

### 2020-09-21

**Bugfixes**

- *Daily/Dungeons:* Fix display of the wrong name for some fractal levels (Thanks @holoxx!)

---

### 2020-09-15

**Bugfixes**

- *Daily:* Fix crash if achievements were missing from the API

**Chores**

- *Supporters & Contributors:* Update the list of supporters

---

### 2020-08-21

**Bugfixes**

- *Achievements:* Fix filtering & display of Icebrood Saga masteries

---

### 2020-08-11

**Bugfixes**

- *General:* Fix nightmode rendering on mobile pages with scrolling

**Chores**

- *Crafting/Zephyrite Supply Boxes:* Adjusted rates to the new game update

---

### 2020-08-02

**Bugfixes**

- *Account/Value:* Fix valuation for items where the buy price is higher than the last known sell price (Thanks to @sutgon!)

**Chores**

- *Crafting/Calculator:* Update costs and vendors for a handful of crafting ingredients (Thanks to @holoxx!)
- *Account/Value:* Update some missing item & gemstore values (Thanks to @sutgon!)
- *Timer:* Update the waypoint for Shadow Behemoth to the shortest route
- *Crafting/Calculator:* Add recipe for the Frost Legion Infusion (Thanks to @holoxx!)
- *Supporters & Contributors:* Update the list of supporters

---

### 2020-07-23

**Chores**

- *Supporters:* Update requests to Patreon API due to changes on their access model
- *Supporters & Contributors:* Update the list of supporters

---

### 2020-07-22

**Bugfixes**

- *Currency/Claim Tickets:* Fix not loading the correct claim tickets because of wiki changes
- *General:* Fix the tooltip for mobile devices rendering with very low opacity for locked unlocks

**Chores**

- *Supporters & Contributors:* Update the list of supporters

---

### 2020-07-19

**Features**

- *Account/Characters:* Allow ordering by Agony Resistance
- *Account/Achievements:* Add a wiki link to each achievement

**Bugfixes**

- *Stats:* Fix showing negative y-axis for graphs of absolute values
- *General:* Replace CDN for guild emblems to allow for newer emblem styles to be rendered

**Chores**

- *Account/Characters:* Remove interface to search through shared characters
  - *This feature caused a lot of confusion and regular reports because users thought it was either
    the account search or a security issue when it wasn't. Based on analytics the feature was also
    not used very much, and removing it arguably increases privacy a little bit. If you used it heavily,
    and you would like to argue for adding it back, please PM me on Discord.*
- *Supporters & Contributors:* Update the list of supporters
- *Translations:* Update German translations

---

### 2020-07-15

**Features**

- *Account/Material Storage:* Add "Individual Price" sort order

**Bugfixes**

- *Stats:* Fix the count of the Icebrood Saga mastery points

**Chores**

- *Account/Mounts:* Update new mounts
- *Account/Nodes:* Update new nodes
- *Supporters & Contributors:* Update the list of supporters

---

### 2020-07-13

**Internals**

- *General:* Migrate the database to a new dedicated server

---

### 2020-07-05

**Bugfixes**

- *Crafting/Calculator:* Fix crafting flow for legendary PvP & WvW armor (Thanks to @adrienfallot!)
- *Account/Value:* Fix an issue where gemstore prices took precedence over item inheritance
  - *This means that the items in the Black Lion Exclusives Chest are now back to being valued at it's tradingpost price, as opposed to being valued at the price of 1 Black Lion Key. If you saw a big value drop recently, this change fixes it.*

**Chores**

- *Supporters & Contributors:* Update the list of supporters

**Internals**

- *General:* Improve database server handling

---

### 2020-06-27

**Internals**

- *General:* Improve database server handling

---

### 2020-06-21

**Bugfixes**

- *Account/Value:* Fix an issue where item & gemstore values were not populating correctly

**Chores**

- *Account/Mounts:* Update new mounts
- *Account/Nodes:* Update new nodes
- *Account/Value:* Update some missing item & gemstore values (Thanks to @sutgon!)
- *Supporters & Contributors:* Update the list of supporters

**Internals**

- *General:* Improve database server handling

---

### 2020-05-30

**Bugfixes**

- *Currency/Laurels:* Fix output for light & small crafting bags (Thanks to @Arckange007!)

**Chores**

- *Supporters & Contributors:* Update the list of supporters
- *Account/Value:* Update some missing item & gemstore values (Thanks to @sutgon!)

**Internals**

- *Stats:* Improve distribution of crawling jobs

---

### 2020-05-17

**Features**

- *Account/Overview:* Add support for "delta" mode to the chart
- *Stats:* Update the main charts to the new chart style
- *Stats:* Add support for "delta" mode to the main charts

**Bugfixes**

- *Stats:* Fix an issue where the ranks for some accounts were not generated intermittently
- *Tradingpost:* Fix filters clipping on some Firefox versions

**Chores**

- *Account/Dyes:* Update the rendered dyes for the newest patch
- *Supporters & Contributors:* Update the list of supporters
- *Account/Value:* Update some missing item values (Thanks to @malagus!)
- *Stats:* Remove a few cheaters from the leaderboard
- *Crafting/Calculator:* Improve recipes for the "Aurora II: Empowering" collection (Thanks to @Archomeda!)

**Internals**

- *General:* Improve alerting for backend job issues
- *Stats:* Improve distribution of crawling jobs

---

### 2020-04-12

**Features**

- *Account/Overview:* Update the account value chart to the new chart style
  - *This now renders via our new code base, and has gotten a redesign and some new functionality. Click to zoom, CTRL+Click to pan.*
- *Account:* Most icons now support an on-touch tooltip for mobile
  - *This works for all of the "new style" icons, so on most unlock, and the bank & material storage pages.*

**Bugfixes**

- *General:* Fix nightmode not being rendered for the whole page
- *Supporters:* Fix Discord tag in supporter emails

**Chores**

- *Supporters & Contributors:* Update the list of supporters
- *Translations:* Update German translations (Thanks to @holoxx)

---

### 2020-04-03

**Features**

- *Account/Guild:* Add an indicator if the required level for upgrades is not reached
- *Account/Guild:* Show item progress and missing amount for treasury items
- *General:* When available, use the item id for generating wiki links
- *Account/Achievements:* Add a link to queue all remaining craftable items of collections in the crafting calculator

**Bugfixes**

- *Currency/Claim Tickets:* Fix not loading the correct claim tickets because of wiki changes
- *Account/Miniatures:* Fix not loading some of the correct sets because of wiki changes
- *Account/Value:* Fix not taking the value of some ascended items into account when generating skin values
- *Stats & Crafting/Legendaries:* Fix Transcendence & Conflux not counting as legendary trinkets

**Chores**

- *Stats:* The Reinforced Boreal Trunk now counts for the "32-Slot Bags" statistic
- *Crafting/Calculator:* Add more vendor items
- *Gathering/Permanent Nodes:* Update the list of gathering nodes

---

### 2020-03-26

**Chores**

- *Supporters & Contributors:* Update the list of supporters

**Internals**

- *General:* Move the database to a new architecture & cluster
- *General:* Improve health checks for cluster status & backups

---

### 2020-03-22

**Chores**

- *Crafting/Calculator:* Update mystic forge recipes for Transcendence & Conflux

---

### 2020-03-18

**Bugfixes**

- *Account/Characters:* Fix wrongly including items in the armory for stat calculations
- *Account/Characters:* Fix a crash if not all equipped items are available in the API

**Chores**

- *Crafting/Calculator:* Update mystic forge recipes
- *Supporters & Contributors:* Update the list of supporters

---

### 2020-02-27

**Features**

- *General:* Redesign the footer

**Bugfixes**

- *Dyes:* Fix a page crash when no API keys were provided

**Chores**

- *Account/Value:* Update gemstore items (Thanks to @sutgon)
- *Translations:* Update German translations (Thanks to @holoxx)

---

### 2020-02-16

**Features**

- *Stats/Account Statistics:* Add new 8 statistics:
  - Account -> Mastery Points (The Icebrood Saga)
  - Collectables: Crystal Oasis: Hero's Choice Chest
  - Collectables: Domain of Vabbi: Hero's Choice Chest
  - Collectables: Elon Riverlands: Hero's Choice Chest
  - Collectables: The Desolation: Hero's Choice Chest
  - Cosmetic Auras -> Heart of the Khan-Ur
  - Map Currencies -> Eitrite Ingots
  - Miscellaneous -> New Year, New Quaggan
- *Stats/Unlock Statistics:* Add PvP Heroes
- *Account/Achievements:* Add a filter for Icebrood Saga mastery points
- *General:* Encode applied skins & upgrades into generated chat codes

**Bugfixes**

- *Account/General:* Calculate "Liquid Gold (Sell)" with the buy price of items if the sell price is not available
- *Account/Achievements:* Show achievement categories without groups under "Historical"
- *Account/Dyes:* Also show an icon and allow item tooltip clicks for starter dyes
- *Account/Character:* Fix page load error if build or equipment are not shared
- *Stats/Unlock Statistics:* Fix not being able to load the page without an API key attached
- *Supporter Benefits:* Fix showing the incorrect supporter status in some cases

**Chores**

- *Crafting/Calculator:* Add recipes for cultivating herbs
- *Crafting/Calculator:* Update mystic forge recipes
- *Crafting/Calculator:* Add recipe for opening the Endless Bottle of Batwing Brew
- *Crafting/Calculator:* Add a few more vendor items
- *Crafting/Calculator:* Purge some outdated recipes
- *Account/Mounts:* Add new mount skins
- *Account/Home Nodes:* Add new home instance nodes
- *Account/Home Nodes:* Add unbound version of Hatched Chilly Pepper
- *Daily:* Add treasure mushrooms
- *Daily:* Add gossamer stuffing to the daily craftable items
- *Supporters & Contributors:* Update the list of supporters

---

### 2020-02-12

**Internals**

- *General:* Temporarily move to a new database cluster
  - *Our database is running full, and this temporarily moved us into a cluster configuration with more storage, while we are waiting for the permanent future servers to be provisioned.*

---

### 2020-02-05

**Chores**

- *Account/Value:* Add a bound Leather Bag to the tradingpost blacklist

---

### 2020-01-29

**Chores**

- *Account/Dyes:* Update the rendered dyes for the newest patch

---

### 2020-01-26

**Bugfixes**

- *Account/Achievement:* Fix an error that prevented the site from loading

---

### 2020-01-25

**Features**

- *Account/Search:* Include items in equipment tabs into the search results
- *Account/Value:* Include items in equipment tabs into the account value
- *Account/Value:* Update the item valuation algorithm to remove an abusable edge-case
- *Account/Character:* Support multiple equipment tabs & build tabs
- *Account/Character:* Show skills and aquatic skills for the active build tab
- *Account/Character:* Show the build template chat link for the active build tab

**Chores**

- *Account/Value:* Update gemstore items (Thanks to @sutgon)
- *Supporters & Contributors:* Update the list of supporters

---

### 2020-01-04

**Bugfixes**

- *Lottery:* Fix an error when entering the lottery without an API key

---

### 2020-01-01

**Features**

- *Lottery:* Add the regular lottery back & remove Quizmas

**Chores**

- *Supporters & Contributors:* Update the list of supporters

---

### 2019-12-08

**Chores**

- *Translations:* Update the translations
- *Supporters & Contributors:* Update the list of supporters

---

### 2019-12-02

**Chores**

- *General:* Add information about annual Christmas lottery to the top of the page
- *Supporters & Contributors:* Update the list of supporters

---

### 2019-11-30

**Features**

- *Community/Lottery:* Add the christmas lottery :santa:
  - *This year also rocking a mobile-friendly design!*
- *[Supporter Benefits](https://gw2efficiency.com/supporter-benefits):* Add a new page to show off the benefits of supporter tiers

**Chores**

- *Account/Value:* Update gemstore items (Thanks to @sutgon)
- *Supporter Benefits:* Update PayPal link to pre-select USD to prevent some confusion

---

### 2019-11-24

**Features**

- *Stats/Account Statistics:* Add 6 new statistics:
  - Cosmetic Auras -> Ember Infusions
  - Cosmetic Auras -> Mystic Infusions
  - Cosmetic Auras -> Peerless Infusions
  - Cosmetic Auras -> Toy Shell Infusions
  - Map Currencies -> Eternal Ice Shard
  - Map Currencies -> Hatched Chili

**Bugfixes**

- *Daily:* Move the new "Living World" dailies next to the other main daily categories

**Chores**

- *Account/Value:* Update item values (Thanks to @sutgon)
- *General:* Update French translations (Thanks to @gottfrois)

---

### 2019-11-18

**Features**

- *Daily:* Add more timegated recipes to the crafting section

**Bugfixes**

- *Account/Value:* Remove value from untradable racing rewards (Racing Scarfs)
- *Crafting/Calculator:* Remove a recipe for the "Attuned Mistborn Band" that infused twice
- *Daily:* List guild hall syntesis output upgrade, not the type of guildhall for gathering

---

### 2019-11-15

**Features**

- *Account/Value:* Improve the value calculation for some craftable items (Thanks to @sutgon)
  - *Now, if an item is marked as inflated (either current or last known sell price if it isn't being sold right now) and it can be crafted and crafting cost is below that of the inflated sell price, its value will be the higher of the crafting and the buy price (previously always buy price). This more accurately reflects the value of lesser traded, craftable items (e.g. bulk recipes).*
- *Crafting/Calculator:* Also allow "0" as a quantity when crafting, for quick multi-recipe adjustments

**Bugfixes**

- *Daily:* Fix the "hide" button not showing when nightmode is enabled

**Chores**

- *Supporters & Contributors:* Update the list of supporters

---

### 2019-11-02

**Chores**

- *Account/Value:* Add value to various items (Thanks to @sutgon)
- *Account/Value:* Update gemstore values (Thanks to @sutgon)

---

### 2019-10-18

**Features**

- *Account/Character -> Discovered Recipes:* Completely redesign the page
  + *The page now also allows for showing undiscovered recipes and filtering by rating.*
- *Account/Bank:* Completely redesign the page
  + *The page now also allows for searching, changing the displayed price, overlaying a heatmap, and ordering by name, price, rarity and count.*
- *Account/Shared Inventory:* Completely redesign the page
  + *The page now also allows for searching, changing the displayed price and ordering by name, price, rarity and count.*
- *Account/Miniatures:* Completely redesign the page
  + *The page now also allow for filtering by binding status and ordering by in-game order.*
- *Account/Mounts:* Completely redesign the page
  + *The page now also allows for filtering by gemstore items and mount type.*
- *Account/Recipes:* Completely redesign the page
  + *The page now also allows for filtering by binding status.*
- *Account/PvP Heroes:* Completely redesign the page
  + *The page now also allows for filtering by hero.*
- *Account/Mailcarries:* Completely redesign the page
  + *The page now also allows for filtering by gemstore items and binding status, and ordering by in-game order.*
- *Account/Outfits:* Completely redesign the page
  + *The page now also allows for filtering by gemstore items.*
- *Account/Finishers:* Completely redesign the page
  + *The page now also allows for filtering by gemstore items and binding status, and ordering by in-game order.*
- *Account/Home Nodes:* Completely redesign the page
  + *The page now also allows for filtering by gemstore items and binding status.*
- *Account/Home Cats:* Completely redesign the page
  + *The page now also allows for ordering by release date and name, and has much better tooltips.*
- *Account/Gliders:* Completely redesign the page
  + *The page now also allows for filtering by gemstore items, and ordering by in-game order.*
- *Account:* Improve mobile design for all redesigned account pages
- *Account:* Add custom order directions (ascending and descending) to all redesigned account pages
- *Account:* Show the split of gold and gems when hovering the "progression display" for unlocks

**Chores**

- *Supporters & Contributors:* Update the list of supporters

---

### 2019-09-14

**Features**

- *Account/Value:* Change the calculation for the value of items to be fairer and more consistent.
  - *We employ an algorithm to detect whether or not the sell price of an item is an accurate representation of it's value. This algorithm previously excluded some item categories (e.g. miniatures), which are now handled the same. We have also tweaked the numbers a little. Please read [this document](./docs/account-value.md#item-value) on how item value is calculated for more information.*

**Bugfixes**

- *Account/Value:* Fix value of items that got flagged with "inaccurate sell price" being ignored for skin value calculation

**Chores**

- *General:* Update German translations (Thanks to @Superritchman!)

---

### 2019-07-30

**Bugfixes**

- *Account/Time Machine:* Fix an issue where snapshot comparisons would never finish loading if no novelties changed between the two selected snapshots

**Chores**

- *Crafting/Zephyrite Supply Boxes:* Adjusted rates to the new game update

---

### 2019-07-18

**Bugfixes**

- *Account/Time Machine:* Support novelties
- *Account/Mounts:* Remove random item descriptions on hover

---

### 2019-07-05

**Features**

- *Account/Novelties:* Add a new site to see your unlocked novelties
  + *This site replaces the old "Tonics" site and includes all the novelties your account has unlocked.*
- *Account/Value:* Novelties are now included in the account value calculation
- *Stats/Player Statistics:* Add a new statistic for the unlocked novelty count
- *Stats/Unlock Statistics:* Add unlock statistic for novelties

**Chores**

- *Supporters & Contributors:* Update the list of supporters

---

### 2019-06-29

**Features**

- *Dungeons:* Add the data for the new raid "The Key of Ahdashim"

**Bugfixes**

- *Account/Value:* Inherit value of discontinued Snowflake items from new "Snowflake" item
- *Account/Statistics:* Include "Legendary Divinations" used to build "Gift of Compassion" and "Coalescence"

---

### 2019-06-25

**Features**

- *General:* Add beta site for supporters
  - *Supporters in Discord can now get access to the newest features a little early!*
- *Account/Statistics:* Add new trinket legendaries "Vision" and "Coalescence"
- *Account/Overview:* Add "Gathering" as a filterable type
- *Dailies:* Add Hero's Choice Chests for Path of Fire maps
- *Account/Home Nodes:* Add "Dragon Crystal" and "Mistborn Mote" home instance nodes
- *Account/Material Storage:* With the heatmap active, show a grey overlay if the item does not have a value at all
- *Account/Material Storage:* Signify more clearly when something is greyed out because the filter does not match

**Bugfixes**

- *Account/Value:* Remove value from discontinued Snowflake items

**Chores**

- *Account/Value:* Update gemstore values
- *Crafting/Calculator:* Update mystic forge recipes
- *Supporters & Contributors:* Update the list of supporters

---

### 2019-06-04

**Features**

- *Account/Material Storage:* Make the heatmap colours dependent on the currently active filters
- *Account/Material Storage:* Add the ability to toggle materials via `ALT` + `Click`
  - *Try this with activated heatmap on your most expensive materials!*
- *Account/Material Storage:* Render bound items as "Bound" instead of "0 copper"
- *Account/Material Storage:* Render items without a generated value as "No Value" instead of "0 copper"
- *Account/Material Storage:* Add support for smaller screen sizes (e.g. phones)

**Bugfixes**

- *Account/Miniatures:* Fix images for miniatures with corrupted item links
- *General:* Fix some partially transparent icons rendering a white background in night mode
- *General:* Fix the outline of the icon subtext sometimes having the wrong colour in night mode

**Chores**

- *General:* Temporarily disable tooltips for touch devices
  - *This was done because touch devices have no way to close the tooltips, and the tooltips are often rendered outside of screen bounds on small screens*

---

### 2019-05-30

**Features**

- *Account/Material Storage:* Completely redesign the material storage page
  - *Now with filter and order options, and the ability to overlay a heatmap to find your priciest shinies.*
- *Account/Dyes:* Replace the copy and wiki buttons with an item icon
  - *This gives the same abilities before, and additionally the options to search and copy the name (when clicking on the icon).*
- *Account/Overview:* Handle extended search modifiers in the account search

**Bugfixes**

- *Account/Farming Tracker:* Fix not being able to resume the farming tracker after API / network errors
- *Crafting/Recipe Search:* Fix not being able to search for untradable result items
- *General:* Fix on-click tooltip rendering not overlaying the item icon when clipping the right screen edge

**Chores**

- *General:* Update translations
- *Supporters & Contributors:* Update the list of supporters

**Internals**

- Massive refactoring of components ("building blocks") to improve development speed, robustness and developer happiness
- Extensive performance optimization of commonly rendered components (item icons, gold, tooltips, etc.)
- Experimentally use the CDN provided by [gw2treasures](https://en.gw2treasures.com/) to render item icons instead of the one provided by the official API, to increase stability

---

### 2019-05-15

**Features**

- *Stats/Account Statistics:* Add one new account statistic
  - [Map Currencies -> Mistborn Mote](https://gw2efficiency.com/account/statistics/statistics.mistbornMote)
- *Crafting/Calculator:* Add recipes for the new legendary "Exordium"

**Chores**

- *Account/Value:* Update gemstore values
- *Account/Value:* Fix some items not being counted at Black Lion Exclusives Chest price
- *Account/Mounts:* Update mounts to match game content

---

### 2019-04-28

**Features**

- *Crafting/Recipe Search:* Add a new page to search through crafting recipes
  - *This replaces the previous "Recipe Overview"*
- *Crafting/Ascended:* Add the ability to order items by crafting price

**Bugfixes**

- *Account/Characters:* Fix an issue where characters could become un-shared when the API returned wrong error codes

**Chores**

- *Account/Value:* Update gemstore values
- *Account/Nodes:* Add value to "Supply Cache" and "Mistonium Node"
- *Account/SAB:* Add the "Mega Bomb" unlock status
- *Translations:* Update French translations (by @EDCDragon)
- *Ads:* Run a month-long promotional advertisement

**Internals**

- *General:* Improve handling of API errors on a few pages

---

### 2019-04-11

**Features**

- *Account/Statistics:* Include unlocked account luck into the "luck" statistic
  - *Previously, only the luck as items was counted, now both unlocked luck and luck as items counts.*
- *Daily:* Sort the "world bosses" category by the next event start
- *Daily:* Autoload the account daily status for world bosses, daily crafting items and HoT map chests
- *Timers:* Autoload the account daily status for world bosses

**Chores**

- *Supporters & Contributors:* Update the list of supporters
- *Translations:* Update French translations (by @EDCDragon)

---

### 2019-03-26

**Bugfixes**

- *Daily:* / *Dungeons:* Fix some occurrences where dungeons and raids were incorrectly shown as completed if they were done before the last reset
- *Stats/Account Statistics:* Count "Pharus" as a legendary

**Chores**

- *Account/Dyes:* Update the dye previews for the Sacred Dye Kit
- *Account/Nodes:* Add new home gathering nodes
- *Crafting/Calculator:* Fix some occurrences where an additional amalgamated gemstone was generated in recipes
- *Supporters & Contributors:* Update the list of supporters

**Internals**

- *General:* Update the API client to support future schema changes and migrate latest changes

---

### 2019-03-07

**Features**

- *Account/Search:* Show which items upgrades and infusions are equipped in at the top of their tooltips

**Bugfixes**

- *Account/Achievements:* Fix the completed percentage indicator of achievements being invisible with enabled night mode
- *Account/Overview:* Fix the playtime calculation ignoring deleted characters
- *Account/Statistics:* Add "Reinforced Olmakhan Bandolier" to the 32 slot bag statistic
- *Crafting/Calculator:* Fix "buy all" setting the mode of top level recipes to buy when crafting multiple recipes
- *Crafting/Calculator:* Fix "buy all" setting the mode to buy for non-tradable components
- *Crafting/Calculator:* Remove all promotions requiring spirit shards

**Chores**

- *Supporters & Contributors:* Specify that supporter prices are in USD and other currencies will be converted
- *Supporters & Contributors:* Update the list of supporters

---

### 2019-02-10

**Features**

- *Account/Value:* Add gems in the wallet to the account value, at current gold-to-gem rate
- *Crafting/Calculator:* Add buttons to set the entire crafting tree to "best path" (default), "craft" or "buy"
- *Crafting/Calculator:* Handle items with multiple crafting recipes by only showing the currently cheapest recipe
  - *Recipe prices are updated every 4 hours.*
- *Daily:* Add the name of the daily recommended fractal scale into the description
- *Stats/Account Statistics:* Add 8 new account statistics
  - [Currencies -> Racing Medallions](https://gw2efficiency.com/account/statistics/statistics.racingMedallions)
  - [Map currencies -> Branded Mass](https://gw2efficiency.com/account/statistics/statistics.brandedMass)
  - [Collectables -> Verdant Brink: Hero's Choice Chest](https://gw2efficiency.com/account/statistics/statistics.vbHerosChoice)
  - [Collectables -> Tangled Depths: Hero's Choice Chest](https://gw2efficiency.com/account/statistics/statistics.tdHerosChoice)
  - [Collectables -> Auric Basin: Hero's Choice Chest](https://gw2efficiency.com/account/statistics/statistics.abHerosChoice)
  - [Collectables -> Dragon's Stand: Hero's Choice Chest](https://gw2efficiency.com/account/statistics/statistics.dsHerosChoice)
  - [Player vs. Player -> PvP Tournament Vouchers](https://gw2efficiency.com/account/statistics/statistics.pvpTournamentVouchers)
  - [Miscellaneous -> 32-Slot Bags](https://gw2efficiency.com/account/statistics/statistics.thirtyTwoSlotBags)
- *Stats/Player Statistics:* Add region (North Ameria / Europe) distribution of accounts
- *Stats/Unlock Statistics:* Add a rarity filter for skin unlocks
- *Supporters:* Send a reminder email to supporters that have not claimed their supporter status after more than one month
- *Supporters:* Show the date and time of the first support on the user page

**Bugfixes**

- *Account/Bank:* Fix bound items' sell/buy price being added to the total sell/buy price at the top
- *Account/Characters:* Take character base stats into account when calculating their main attributes
- *Account/Shared Inventory:* Fix bound items' sell/buy price being added to the total sell/buy price at the top
- *Account/Value:* Fix the value of Pharus's precursors counting twice
- *Daily:* Fix the "Roller Beetle Racing Adventure" daily reappearing after being hidden
- *General:* Fix nightmode in Safari 12.1+ (by @darthmaim)

**Chores**

- *Account/Value:* Add value to the "Mini Husk-o-Lantern"
- *Account/Value:* Fix the value for a few items that unlock multiple armor weights
- *Account/Value:* Update gemstore values
- *Translations:* Update German translations (by @Regitus)

---

### 2019-02-01

**Bugfixes**

- *Account/Achievements:* Fix overachieved achievements not being ordered to the bottom of the list
- *Account/Wardrobe:* Fix some generation 1 legendaries having "Exotic" rarity
- *Crafting/Calculator:* Fix the recipes for legendary armor crafting
- *Gathering/Permanent Nodes:* Fix "reset daily progress" button not resetting the daily progress
- *Legal Notice:* Fix link to opt out ouf account statistic gathering
- *Stats/Unlock Statistics:* Remove data of accounts that have opted out of statistic gathering

**Chores**

- *Account/Value:* Add value to various items (including the items in the last "Black Lion Exclusives Chest")
- *Account/Value:* Update gemstore items
- *Crafting/Calculator:* Update the list of recipes
- *Daily:* Add "Provisioner Tokens" and "Roller Beetle Racing Adventures" to the checklist
- *Supporters & Contributors:* Update the list of supporters

**Internals**

- *General:* Retry API requests up to 3 times, because of recent API instability

---

### 2019-01-09

**Chores**

- *Account/Dyes:* Update the dye previews for the Kralkatorrik set
- *Crafting/Calculator:* Update the list of recipes, including recipes for the new legendary "Pharus"

---

### 2019-01-01

**Features**

- *Community/Lottery:* Add the regular lottery back & remove Quizmas

**Bugfixes**

- *Account/Miniatures:* Fix the miniature set filter not being crawled correctly (by @Ashden)

**Chores**

- *Supporters & Contributors:* Update the list of supporters
- *Translations:* Update translations

**Internals**

- *General:* Reword everything from "Donation" to "Support", since we pay taxes

---

### 2018-12-01

**Features**

- *Community/Lottery:* Add the christmas lottery & Quizmas :santa:

**Chores**

- *General:* Revert to the previous advertising provider (Sovrn)
- *General:* Remove the affiliate link from dashboard
- *Stats/Account Statistics:* Rename "N/A" to "Click to see" for clarity
- *Supporters & Contributors:* Update the list of supporters

---

### 2018-11-14

**Features**

- [*Account/Mounts:*](https://gw2efficiency.com/account/mounts) Add a page for showing unlocked mount skins on the account
- *Account/Value:* Add unlocked mount skins into the calculation
- *Account/Time Machine:* Show changes in unlocked mount skin value
- *Stats/Account Statistics:* Add 2 new account statistics
  - [Wealth -> Mount value](https://gw2efficiency.com/account/statistics/values.mounts.value)
  - [Progression -> Unlocked Mounts](https://gw2efficiency.com/account/statistics/statistics.mountCount)
- [*Stats/Unlock Statistics:*](https://gw2efficiency.com/account/unlock-statistics?filter.key=mounts) Add unlock statistics for mounts

**Bugfixes**

- *Account/Character:* Fix two rare cases in which the displayed AR was incorrect

**Chores**

- *Stats/Account Statistics:* Update the list of blacklisted cheaters

---

### 2018-11-09

**Features**

- *General:* Add (hover & click) tooltips to item icons in the new codebase
  - *This adds tooltips to "Account -> Time Machine", "Stats -> Unlock Statistics" and "Crafting -> Zephyrite Supply Boxes"*

**Bugfixes**

- *Daily:* Fix the ability to un-hide dailies

**Chores**

- *Supporters & Contributors:* Update the list of supporters

---

### 2018-10-27

**Bugfixes**

- *General:* Fix advertisement handling for smaller screen sizes
  - *This also fixes the mobile navigation being out of view on the right side.*
- *Account/PvP:* Fix PvP rank points not lining up with the in-game values
- *Daily:* Fix hidden dailies resetting if they are not in the current rotation

---

### 2018-10-21

**Features**

- *Stats/Account Statistics:* Add 7 new account statistics
  - [Map Currencies -> Inscribed Shards](https://gw2efficiency.com/account/statistics/statistics.inscribedShards)
  - [Map Currencies -> Lumps of Mistonium](https://gw2efficiency.com/account/statistics/statistics.lumpsOfMistonium)
  - [Raids -> Legendary Divinations](https://gw2efficiency.com/account/statistics/statistics.legendaryDivinations)
  - [Aura Items -> Crystal Infusions](https://gw2efficiency.com/account/statistics/statistics.crystalInfusions)
  - [Aura Items -> Polysaturating Infusions](https://gw2efficiency.com/account/statistics/statistics.polysaturatingInfusions)
  - [Miscellaneous -> Silverwastes Shovels](https://gw2efficiency.com/account/statistics/statistics.silverwastesShovels)
  - [Gemstore -> Shared Inventory Slots](https://gw2efficiency.com/account/statistics/statistics.sharedInventorySlots)
- *Daily:* Add "Gleam of Sentience" and "Volatile Singularity" to the "Converters" section

**Bugfixes**

- *Account/Overview:* Reset the "weight" filter correctly when switching the "type" filter
- *Crafting/Calculator:* Handle the user entering "0" as the amount for an item better

**Internals**

- *General:* Update the development methology for the backend to a more recent standard
- *General:* Update build tooling for sprites on the frontend to remove some legacy tooling
- *General:* Update the way that ads are embedded to be more performant

---

### 2018-10-17

**Features**

- *[Stats/Account Statistics](https://gw2efficiency.com/account/statistics):* Add a page to show an overview of account statistic ranks and values
  - *[Preview](https://i.imgur.com/Lr5DGVq.png)*
  - *Free users can see their top 10 stats, supporters can see all stats.*

**Chores**

- *Supporters & Contributors:* Update the list of supporters

---

### 2018-10-13

**Bugfixes**

- *Daily:* Fix link pointing to the crafting calculator

**Chores**

- *General:* Update advertising provider
    - *We are now trialling a new advertising provider. If you see any ads that you deem inappropriate, please let us know immediately.*
- *Supporters & Contributors:* Update the list of supporters

**Internals**

- *General:* Multiple small bugfixes and improvements in underlying modules
- *Account/Stats:* Restructure to support faster account rank lookup in the future

---

### 2018-10-13

**Bugfixes**

- *Daily:* Fix link pointing to the crafting calculator

**Chores**

- *General:* Update advertising provider
    - *We are now trialling a new advertising provider. If you see any ads that you deem inappropriate, please let us know immediately.*
- *Supporters & Contributors:* Update the list of supporters

**Internals**

- *General:* Multiple small bugfixes and improvements in underlying modules
- *Account/Stats:* Restructure to support faster account rank lookup in the future

---

### 2018-10-01

**Features**

- *Daily:* Rework the technical implementation and clean up the design
  - *This also fixes a bunch of weird bugs, especially in other languages than English.*
- *Crafting/Ascended Weapons:* Load all craftable ascended items automatically

**Bugfixes**

- *Account/Value:* Fix the value of precursors counting twice for "Claw of the Khan-Ur", "Verdarach" and "Xiuquatl"

**Chores**

- *Crafting/Precursors & Legendaries:* Add the new legendary "Xiuquatl" to the list
- *Supporters & Contributors:* Update the list of supporters
- *General:* Update translations
- *General:* Update the Discord invite link

---

### 2018-09-22

**Chores**

- *Crafting/Calculator:* Add recipes for crafting the new legendary "Xiuquatl"

---

### 2018-09-21

**Bugfixes**

- *Account/Dyes:* Fix the page not rendering correctly with nightmode enabled

**Chores**

- *Account/Statistics:* Count "Collector's Edition Sandstorm" for the "Permanent Contracts" statistic
- *Account/Statistics:* Count "Unidentified Fossilized Insect" for the "Fossilized Insects" statistic
- *Dungeons:* Add the new raid wing (Mythwright Gambit)
- *Supporters & Contributors:* Update the list of supporters

**Internals**

- *Account/Crawling:* Add a backend task that regularly retries API keys that got marked as "invalid" by the official API
- *Account/Crawling:* Improve the backend task which cleans expired account data

---

### 2018-09-12

**Features**

- *[Account/Dyes](https://gw2efficiency.com/account/dyes):* Completely redesign the dye page
  - *You can now also preview and compare dyes based on in-game screenshots. Massive thanks to Saskia Van Leeuwen for her dedication to take 2240 screenshots.*
- *Account/Value:* Update the item value calculation to be fairer
  - *You can read more about how the item value is now calculated [here](https://github.com/gw2efficiency/issues/blob/master/docs/account-value.md#item-value).*
  - *This should not cause any big spikes, except for items that were previously valued incorrectly.*
- *Account/Guild:* Show the sell price subtotal for each stash tab
- *Account/Overview:* Add a link to the delivery box
- *Stats/Account Statistics:* Add new statistics
  - Diflourite Crystals
  - Kites
  - Ranked PvP Winrate (250+ games)
  - Ranked PvP Winrate (500+ games)
  - Ranked PvP Winrate (1000+ games)
  - Snow Diamond Infusions
- *Stats/Unlock Statistics:* Add achievement point values to the achievements table
- *Stats/Unlock Statistics:* Add filters for "Armor", "Weapon", "Backpieces" and "Gathering Tools" to the skins table
- *Stats/Unlock Statistics:* Add wiki links to all tables

**Bugfixes**

- *Crafting/Calculator:* Fix the recipes for "+9 Agony Infusions"
- *Crafting/Calculator:* Remove the recipes for "Ascended weapon/armor boxes" from achievements
- *Gathering:* Fix output quantity for Seaweed in Ember Bay
- *Stats/Unlock Statistics:* Fix an issue where the recipes statistics would not load

**Chores**

- *Account/Tonics:* Update the list of tonics
- *Account/Value:* Add a value to the "Endless Mushroom Emperor Tonic"
- *Account/Value:* Update the gemstore items
- *Crafting/Calculator:* Update the list of mystic forge recipes
- *Daily:* Add more daily tasks
  - "Defeat the Ley-Line Anomaly" under Worldbosses
  - "Daily Completionist" under PvE
- *Stats/Account Statistics:* Update the list of items for multiple statistics. This improves the correctness of the following statistics:
  - Unique Permanent Tonics
  - Toys
  - Unlimited Gathering Tools
  - Musical Instruments
  - Music Boxes
  - Fossilized Insects
  - Permanent Contracts
  - Chak Egg Sacks
  - Preserved Queen Bees
  - Ghostly Infusions
  - Bauble Infusions
  - Poly-luminescent Refractors
  - Winter's Heart Infusions
  - Phospholuminescent Infusions
  - Liquid Aurillium
  - Celestial Infusions
  - Festive Confetti Infusions
- *Supporters & Contributors:* Update the list of supporters
- *User:* Clarify the text explaining how automatic supporter upgrades work

**Internals**

- *Account/Crawling:* Improve the backend task which cleans expired account data

---

### 2018-08-13

**Features**

- *Supporters:* Automatically assign the supporter status to PayPal donators when they link their gw2efficiency account to the same email they used on PayPal
- *Supporters:* Show the total and montly donation amount in dollars on the [user](https://gw2efficiency.com/user#supporter-status) page

**Chores**

- *Crafting/Calculator:* Update the list of recipes
- *Supporters & Contributors:* Update the list of supporters

---

### 2018-08-02

**Features**

- *General:* Add a link to the API status page in the footer

**Bugfixes**

- *Account/Time Machine:* Hide impossible option for "end" snapshot selection
- *Crafting/Calculator:* Remove the horizontal scroll bar when crafting a lot of different items
- *General:* Fix an issue that caused logins to fail in some cases
  - *Due to this change, all users will be logged out once.*
- *Stats:* Fix an issue that caused some API keys not to be crawled since the 27th of July

**Chores**

- *Crafting/Calculator:* Update the list of recipes
- *Supporters & Contributors:* Update the list of supporters

---

### 2018-07-24

**Features**

- [*Crafting/Zephyrite Supply Boxes:*](https://gw2efficiency.com/crafting/zephyrite-supply-boxes) Added page for best conversion of materials into Zephyrite Supply Boxes

**Chores**

- *Translations:* Update translations

---

### 2018-07-22

**Chores**

- *General:* First step to improve error handling and reporting
- *General:* Remove red warning for tradingpost issues, fixed in the official API
- *Supporters & Contributors:* Update the list of supporters

---

### 2018-07-18

**Features**

- *Account/Value:* Improve the value calculation for non-craftable & non-tradeable ascended items
  - *Most accounts should see an increased account value because of this change.*
  - *With this change, the calculation will use the average crafting price of craftable ascended items, instead of the average value. It will also pick up newly released items (e.g. from raids) without having to wait for data updates. Additionally, it will now attach the same value to items that are "craftable" from achievements, which were previously in many cases valued extremely low or not valued at all.*
- *Crafting/Calculator:* Show recipes in the crafting calculator that are missing in the official API (due to the recent whitelist issue) but are still in gw2efficiency's database

**Bugfixes**

- *Crafting/Calculator:* Prioritize official crafting recipes over mystic forge/achievement recipes
- *Currency/Badges of Honor:* Fix an issue that prevented the page from loading correctly

**Chores**

- *Supporters & Contributors:* Update the list of supporters

---

### 2018-07-13

**Bugfixes**

- *Stats/Account Statistics:* Use the "buy price" version of "liquid gold" for the statistics to prevent abuse with inflated sell listings
- *General:* Fix translations not rendering correctly in some cases
- *Account/Time Machine:* Fix the value and value change of buy listings not displaying correctly

**Chores**

- *Account/Value:* Update the [design document](./docs/account-value.md) with the new definition of "item value"
- *Tradingpost/Transactions:* Try another methodology to get the transaction API to work (cache busting)
- *Supporters & Contributors:* Update the list of supporters

---

### 2018-07-12

**Bugfixes**

- *Account/Value:* Update the item value calculation to handle price manipulations better
    - *The item value calculation now ignores the sell price of an item if it is likely to be inflated (low supply, sell price is a lot higher than buy price, buy price is fairly low and the difference between the prices is substantial). This currently impacts around 1300 items and will not make a difference for 99% of users.*
    - *The change was required because a player gamed the system to get to the top of the leaderboard. They created about 270 of a craftable item, which had no supply on the tradingpost. They then proceeded to list that item for 10,000 gold, making gw2efficiency believe the value of this item to be 10,000 gold. In effect, this inflated the value of their account by about 2,700,000 gold.*
- *Account/Value:* Reenable tradingpost listings for the account value (this might get reverted if it still causes issues)
- *Account/Time Machine:* Add missing icons for crafting disciplines

**Chores**

- *Account/Statistics:* Update list of unlimited gathering tools
- *Account/Value:* Add value to Black Lion Statuettes
- *Account/Value:* Add value to missing home instance nodes
- *Account/Value:* Add value to missing unlimited gathering tools
- *Account/Value:* Add value to recipes for legendary armor crafting
- *Account/Value:* Update the gemstore items
- *Crafting/Ascended:* Update list of ascended items
- *Crafting/Calculator:* Add Xunlai Ingots to the Spark of Sentinence recipe
- *Crafting/Calculator:* Fix the name of the NPC selling Mists Stones
- *Crafting/Calculator:* Remove confusing cyclic agony infusion upgrade recipes
- *Crafting/Calculator:* Update the recipes
- *Supporters & Contributors:* Redesign the page
- *Supporters:* Update donators and patrons list

---

### 2018-07-04

**Chores**

- *Crafting/Calculator:* Update recipes

---

### 2018-06-29

**Features**

- [*Account/Time Machine:*](http://gw2efficiency.com/account/time-machine) Pick 2 crawling snapshot date points, and you can see exactly what changed in your account. ([Preview](https://i.imgur.com/tHG7lVr.png))
- *Account/Time Machine:* More minor improvements since the last the beta release

**Chores**

- *Supporters:* Update donators and patrons list
- *Translations:* Update translations

---

### 2018-06-22

**Features**

- *Account/Time Machine:* Many minor improvements to the beta release

**Bugfixes**

- *General:* Fix ads on the sides not being clickable

**Chores**

- *Internals:* Add backend job to invalidate non-crawled API keys
- *Supporters:* Update donators and patrons list
- *Translations:* Update translations

---

### 2018-06-16

**Features**

- *Account/Time Machine:* Beta release. Get access by joining our [Discord](https://discord.gg/ZgKdTra) and give us feedback!

**Chores**

- *User/API Keys:* Add warning message about Privacy Badger
- *Supporters:* Update donators and patrons list
- *Translations:* Update translations

---

### 2018-06-11

**Chores**

- *Stats/Unlocks:* Replace the infinitely scrolling table with a paginated table
- *Account/Farming:* Replace the infinitely scrolling table with a paginated table
- *Supporters:* Update donators and patrons list
- *Account/Home Nodes:* Add Bauble Gathering System

---

### 2018-05-26

**Chores**

- *Legal Notice:* Update the privacy policy
  - *We only updated the wording to be a little bit clearer and fixed a bunch of spelling mistakes, nothing really changed. We have and always will respect your privacy and protect your data.*
- *General:* Show consent modal for personalized advertisements for free users
- *Supporters:* Update donators and patrons list
- *Translations:* Update translations

---


### 2018-05-22

**Bugfixes**

- *Gathering:* Fix daily profit not being calculated correctly for mulitple runs

**Chores**

- *Account/Nodes:* Add new home gathering nodes
- *Translations:* Update translations
- *Supporters:* Update donators and patrons list

**Internals**

- *Translations:* Refactor and add support for translations to "Stats/Unlock Statistics", "Stats/Player Statistics", "User/API Key Management" and "Gathering" pages

---

### 2018-05-17

**Bugfixes**

- *Crafting/Calculator:* Fix achievement progress not being recognised during crafting
- *Stats/Unlock Statistics:* Fix search field not responding

**Chores**

- *Crafting/Calculator:* Updated crafting recipes
- *Supporters:* Update donators and patrons list

---

### 2018-05-12

**Bugfixes**

- *Account/Value:* Fix backend calculated crafting price for items without sell/buy price on the tradingpost

**Chores**

- *Nightmode:* Improve the nightmode display for newer pages (less agressive black, better button styles)
- *Translations:* Drop language support for Polish, Portuguese, Russian, Dutch, Czech and Norwegian. These languages were not used (< 1% of total users **combined**) and still showed English item names due to the game not supporting them.
- *Translations:* Move translations into their own [Github repository](https://github.com/gw2efficiency/translations) for public contributions
- *Supporters:* Update donators and patrons list

**Internals**

- *Frontend:* Update dependencies for the build system
- *Frontend:* Update internal framework version
- *Translations:* Add support for translations for newly created pages. Translations will follow in the next few months.

---

### 2018-05-11

**Chores**

- *Crafting/Calculator:* Create a set of internal scripts to help find differences, update and validate crafting recipes from different sources (including the official wiki)
- *Crafting/Calculator:* Update a lot (500+) of different Mystic Forge recipes

---

### 2018-05-10

**Chores**

- *Supporters:* Update donators and patrons list

**Internals**

- *Account Crawling:* Refactor existing internal functionality for upcoming features

---

### 2018-05-07

**Features**

- *Supporters:* Add support for "Platinum" supporters (previously counted as "Gold")

**Bugfixes**

- *General:* Fix top warning banner on mobile
- *General:* Fix graph line rendering issue

**Chores**

- *General:* Add two extra ad units on the side of the page
- *Supporters:* Update donators and patrons list

---

### 2018-05-06

**Features**

- *Account/Farming Tracker:* Add the ability to export farming results to CSV
- *Tradingpost/Overview:* Add the ability to set a maximum % for the "demand > supply" filter
- *Gathering:* Add the ability to sort the gathering nodes by profit

**Chores**

- *Gathering:* Update the site style
- *Supporters:* Update donators and patrons list

**Internals**

- *General:* Refactored the way that the site saves user information (this includes filter settings and daily checkmarks)

---

### 2018-04-29

**Features**

- *Supporters:* Crawl accounts of supporters more frequently
    - *The accounts of free users get crawled once every 24 hours, copper supporters get crawled once every 12 hours, silver supporters get crawled once every 6 hours, gold supporters get crawled once every 3 hours.*
- *Supporters:* The account statistic history of supporters is now unlimited
    - *The account statistic history of free users will be displayed going back 1 year. For supporters there is no limit. However, the statistics of free users will continue to be saved past 1 year, so once their accounts are upgraded they will have access to the full history.*

**Bugfixes**

- *Account/Statistics:* Crawl accounts only once per time frame
  - *Previously, all keys of each game account got crawled once per timeframe and then merged to calculate the leaderboard rank. This could cause spikes in the history of certain statistics if the permissions of the keys were different and was a major cause of server strain. Now each account only gets crawled once, with the key that has the best permissions for account statistic generation. This also means that adding multiple API keys no longer increases the crawling frequency.*

**Chores**

- *Account/Wallet:* Update the site style
- *Legal notice:* Update the site style
- *Stats/Account Statistics:* Update champion bag items
- *Supporters:* Update donators and patrons list
- *User/Account:* Update the site style & [supporter feature grid](https://gw2efficiency.com/user#supporter-status)

**Internals**

- *Account/Statistics:* Handle API errors more gracefully
- *Job processing:* Improve performance for a lot of jobs working on account statistic creation

---

### 2018-04-22

**Features**

- *Account/Dyes:* Add birthday dye pack filter
- *Stats/Account Statistics:* Add more player statistics
  - [Potion of PvP Rewards](https://gw2efficiency.com/account/statistics/statistics.potionOfPvpRewards)
  - [Potion of WvW Rewards](https://gw2efficiency.com/account/statistics/statistics.potionOfWvwRewards)
  - [Skirmish Chests](https://gw2efficiency.com/account/statistics/statistics.skirmishChests)

**Chores**

- *Account/Value:* Update the gemstore items
- *Stats/Account Statistics:* Add endless upgrade extractor to permanent contracts
- *Stats/Account Statistics:* Update unlimited gathering tools items

---

### 2018-04-21

**Internals**

- Improve how the backend jobs, such as account crawling, get processed and logged

---

### 2018-04-15

**Features**

- *Account/Guild:* Show the current Aetherium and Favor
- *Account/Wardrobe:* Add gathering tool skins
- *Currency/Karma:* Add Trade Caches to the conversion methods
- *Tradingpost/Overview:* Add an option to only filter through tracked items

**Bugfixes**

- *Account/Dyes:* Fix sets not being loaded correctly

**Chores**

- *Account/Value:* Add a value to the "Endless Upgrade Extractor"
- *Crafting/Caculator:* Add recipes for "Hateful Sworl"
- *Crafting/Caculator:* Add recipes for "Mini Nova Griffon Hatchling"
- *Crafting/Caculator:* Add recipes for Path of Fire elite specialization weapons (e.g. "Veilrender")
- *Supporters:* Update donators and patrons list

---

### 2018-04-03

**Chores**

- *General:* Removed chairs
- *Supporters:* Update donators and patrons list

---

### 2018-04-01

**Chores**

- *Account/Value:* Temporarily removed tradingpost orders from account value due to bugs in the official API ([Read more](https://github.com/gw2efficiency/issues/issues/943))
- *General:* Added chairs
- *Supporters:* Update donators and patrons list

---

### 2018-03-29

**Chores**

- *Account/Characters:* Added back the link to SAB unlocks
- *General:* Marked "Claw of the Khan-Ur" as a legendary (statistics / crafting pages)
- *Supporters:* Update donators and patrons list

---

### 2018-03-24

**Chores**

- *Crafting/Calculator:* Added recipes for [Mystical +9 Agony Infusion](https://gw2efficiency.com/crafting/calculator/a~0!b~1!c~0!d~1-86180) (thanks to @CuriousCharr)
- *Crafting/Calculator:* Updated recipes for [Sigil of Mischief](https://gw2efficiency.com/crafting/calculator/a~0!b~1!c~0!d~1-68436) (thanks to @CuriousCharr)

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

- *Dungeons:* Migrate the dungeon page to a temporary daily page
- *Chat:* Move to a public [Discord](https://discord.gg/ZgKdTra)

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
- *Crafting/Calculator:* Add recipes for legendary armor pieces ([#617](https://github.com/gw2efficiency/issues/issues/617))

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
