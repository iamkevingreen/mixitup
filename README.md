Mixitup - Meteor
============

`meteor add iamkevingreen:mixitup`

Meteor packaging of Patrickkunka/mixitup

All rights to [patrickkunka/mixitup](https://github.com/patrickkunka/mixitup) are with the original author

Example
============
###In your handlebars template:

  Set up your container

    <div id="Container">
      <div class="mix category-1" data-my-order="1"> ... </div>
      <div class="mix category-1" data-my-order="2"> ... </div>
      <div class="mix category-2" data-my-order="3"> ... </div>
      <div class="mix category-2" data-my-order="4"> ... </div>
    </div>

  Set up your filters

    <button class="filter" data-filter=".category-1">Category 1</button>
    <button class="filter" data-filter=".category-2">Category 2</button>

  Set up your Sort controls

    <button class="sort" data-sort="my-order:asc">Ascending Order</button>
    <button class="sort" data-sort="my-order:desc">Descending Order</button>

###In your CSS

    #Container .mix{
        display: none;
    }


###In client-side JS code:

    Template.mytemplate.rendered=function() {
      $('#Container').mixItUp();
    }

See [Mixitup @ KunkaLabs.com](https://mixitup.kunkalabs.com/) for more information and api documentation

##License
**Please view the following license information, and if you use it commercially pay for the appropiate package**

For use in commercial projects and products we require that you purchase a commercial license.

For more information see [mixitup.kunkalabs.com/licenses](http://mixitup.kunkalabs.com/licenses)

MixItUp is free to use in non-commercial projects under the terms of the Creative Commons CC-BY-NC license.
