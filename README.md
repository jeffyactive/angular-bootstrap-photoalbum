angular-bootstrap-photoalbum
============================

Simple framework for a web photo album, based on Angular and Bootstrap.  See it live at [jeffyactive.github.io/angular-bootstrap-photoalbum/](https://jeffyactive.github.io/angular-bootstrap-photoalbum/)


Motivations
-----------

You may find this project helpful if the following apply:

1. You have photos you'd like to share publicly, especially with a [Creative Commons](https://creativecommons.org/) license
2. You've considered platforms such as Flickr, Google Photos, Facebook, ... and have misgivings about each
3. You already have a web hosting plan
4. You're comfortable with basic HTML and CSS


How to use
----------

You can get up and running in four easy steps:

1. Copy all the files in this repository to your web hosting service
2. Add your photos in the /photos folder
3. Edit the /photos/list.js file to specify those photos and any license/attribution
4. Tweak the HTML and CSS to your liking

_Nothing to compile and no need for more than a text editor!_


### Step 1: Copy files

Clone or download this repository to a folder on your computer by clicking the green button.  Then upload all the files (except perhaps this README.md) to the target folder of your web hosting service using your preferred method.

Browse to the __index.html__ file on your web hosting service and confirm that everything works exactly as in the [live example](https://jeffyactive.github.io/angular-bootstrap-photoalbum/).


### Step 2: Add photos

Add to the __/photos__ folder all the photos you'd like to share.  _You can delete the three example photos!_

If you're sharing high-resolution photos, consider uploading two versions of each such photo:
- the original at full resolution/quality
- a reduced resolution/quality version that will load much faster

As you can see from the example, one possible convention is to have __imageXX.jpg__ as the fast-loading version and __imageXX-full.jpg__ as the full resolution version.


### Step 3: Edit the photo list

Edit the __/photos/list.js__ file in your favourite text editor.  Add an entry in the PHOTOS array for each photo you'd like to share, in the order in which you'd like them to be shared.

The only mandatory property is __image__, all others are optional as shown in the example below:

    const PHOTOS = [
      {
        "image": "photos/image01.jpg"
      },
      {
        "image": "photos/image02.jpg",
        "fullsize": "photos/image02-full.jpg",
        "attributee": "Jeffrey Dungen",
        "license": "cc-by-sa"
      }
    ];

Watch out for the following gotchas which tend to be the source of those _"WTF it was working a moment ago!"_ moments:
- stray or missing commas
- use of the wrong quotes (copy-paste from the example if necessary!)
- incorrect file name (case sensitive, etc.)

You can sanity-check your list by copying everything between _and including_ the square braces __\[ ... \]__ to a tool such as [JSONLint](https://jsonlint.com/).  If it says "Valid JSON" you're good!

The following [Creative Commons](https://creativecommons.org/) licenses are currently supported:
- "cc-by"
- "cc-by-nc"
- "cc-by-sa"
- "cc-by-sa-nc"
- "cc-by-nd"
- "cc-by-nd-nc"

Don't forget to upload the edited list to your web server!


### Step 4: Tweak the HTML and CSS

Edit the __index.html__ file in your favourite text editor.  You'll likely want to edit the following fields:

| Field             | Default                                                |
|:----------------- |:------------------------------------------------------ |
| title             | angular-bootstrap-photoalbum                           |
| meta description  | Simple framework for a web photo album, based on Angular and Bootstrap. |
| navbar-brand href | https://jeffyactive.github.io/angular-bootstrap-photoalbum |
| navbar-brand name | Example Photoalbum                                     |
| footer href       | https://jeffyactive.github.io                          |
| footer name       | Example Brand                                          |

For simplicity, this project uses the default Bootstrap colours and styles.  To update these, edit the __/style/photoalbum.css__ file in your favourite text editor to override the defaults of [Bootstrap](https://getbootstrap.com/docs/3.3/css/).

Don't forget to upload the edited index.html and photoalbum.css to your web server!


License
-------

MIT License

Copyright (c) 2017 Jeffrey Dungen

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
