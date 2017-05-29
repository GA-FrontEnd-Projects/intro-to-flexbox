$(function() {
	$('select').change(function() {
		var $this = $(this);
		var affectedItemType = $this.attr('data-applies-to');
		var affectedProperty = $this.attr('data-property');
		var affectedPropertyValue = $this.val();

		$this.closest('section').find('.flex-' + affectedItemType).css(affectedProperty, affectedPropertyValue);
	});
});