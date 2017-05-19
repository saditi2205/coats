jQuery(document).ready(function($) {
    $(".clickable-row").click(function() {
        window.location = $(this).data("href");
    });
	$('#example').DataTable( {
    "order": [[ 4, "desc" ]],
	responsive: true,
    columnDefs: [
        { responsivePriority: 1, targets: 0 },
        { responsivePriority: 2, targets: 1 },
        { responsivePriority: 3, targets: 4 },
        { responsivePriority: 4, targets: 5 }
    ]
} );
});