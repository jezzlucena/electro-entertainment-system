$(document).ready(function() {
  populatePortfolio();

  $('.title .toggle').click(function() {
    $(this).toggleClass('grid').toggleClass('list');

    let gallery = $(this).closest('.section').find('.gallery');
    gallery.addClass('hide');

    setTimeout(function() {
      gallery.toggleClass('grid');
      gallery.removeClass('hide');
    }, 1000);
  });
});

function populatePortfolio() {
  let template = $('.item.template');

  projects.forEach(item => {
    let element = template.clone();

    element.find('.name').html(item.project_name);
    element.find('.company').html(item.company_name);
    element.find('.role').html(item.role);
    element.find('.year').html(item.project_year);
    element.find('.thumb').attr('src', item.thumb_static_url);

    if (item.thumb_video_url) {
      element.find('.thumbVideo').attr('src', item.thumb_video_url);
    } else {
      element.addClass('noVideo');
    }

    element.find('.description').html(item.description);
    element.attr('href', `project.php?p=${item.token}`);
    element.find('.moreLink.details').attr('data-url', `project.php?p=${item.token}`);

    if (item.behance_url) {
      element.find('.moreLink.behance').attr('data-url', item.behance_url);
    } else {
      // element.find('.moreLink.behance').addClass('disabled');
      element.find('.moreLink.behance').remove();
    }

    if (item.github_url) {
      element.find('.moreLink.github').attr('data-url', item.github_url);
    } else {
      // element.find('.moreLink.github').addClass('disabled');
      element.find('.moreLink.github').remove();
    }

    if (item.video_url) {
      element.find('.moreLink.video').attr('data-url', item.video_url);
    } else {
      // element.find('.moreLink.video').addClass('disabled');
      element.find('.moreLink.video').remove();
    }

    if (item.live_url) {
      element.find('.moreLink.live').attr('data-url', item.live_url);
    } else {
      // element.find('.moreLink.live').addClass('disabled');
      element.find('.moreLink.live').remove();
    }

    element.find('.moreBtn').click(function(event) {
      $('.moreDropdown').removeClass('open');
      element.find('.moreDropdown').addClass('open');

      event.preventDefault();
      event.stopPropagation();
    });

    element.find('.moreLink:not(.disabled)').click(function(event) {
      window.open($(this).attr('data-url'));

      event.preventDefault();
      event.stopPropagation();
    });

    $('body').click(closeDropdowns);

    element.on('touchmove', function() {
      closeDropdowns();
      element.addClass('touched');
    });

    element.removeClass('template');

    $('.gallery').append(element);
  });

  $('.gallery').removeClass('loading');
}

function closeDropdowns() {
  if ($('.gallery .moreDropdown.open').length > 0
  || $('.gallery .item.touched').length > 0) {
    $('.gallery .moreDropdown.open').removeClass('open');
    $('.gallery .item.touched').removeClass('touched');
  }
}
