<?php
  wp_enqueue_style('styles', get_template_directory_uri() . '/css/styles.css' );
  wp_enqueue_style('normalize', get_template_directory_uri() . '/css/normalize.css' );
  
  wp_enqueue_script('main', get_template_directory_uri() . '/js/main.js', array(), false, true );
