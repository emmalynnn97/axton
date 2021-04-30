<?php
$title = get_the_title(); // This must be!, because this is the return - the_title would be echo
$title_array = explode(' ', $title);
$first_word = $title_array[0];
$second_word = $title_array[1];
?>
<h1>
    <?php echo $first_word; ?>
    <span><?php echo $second_word; ?></span>
</h1>