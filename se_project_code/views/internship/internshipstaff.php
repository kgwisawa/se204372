<!DOCTYPE html>
<html>
<link rel="stylesheet" href="styles_table.css">

<body>
    <section>
        <div class="tbl-header">
            <table cellpadding="0" cellspacing="0" border="0">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Company name</th>
                        <th>Position</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                        <th>File</th>
                        <th>Status</th>
                        <th>Update status</th>
                    </tr>
                </thead>
            </table>
        </div>
        <div class="tbl-content">
            <table cellpadding="0" cellspacing="0" border="0">
                <tbody>
                    <?php

                    foreach ($internship_List as $il) {
                        echo "
        <tr> 
        <td>$il->lnid</td>
        <td>$il->lnname</td>
        <td>$il->cpname</td>
        <td>$il->position</td>
        <td>$il->sdate</td>
        <td>$il->edate</td>
        <td>$il->file</td>
        <td>$il->status</td>
        <td>$il->confirm</td>
        </tr>
        ";
                    }


                    ?>
            </table>
            <script>
                $(window).on("load resize ", function() {
                    var scrollWidth = $('.tbl-content').width() - $('.tbl-content table').width();
                    $('.tbl-header').css({
                        'padding-right': scrollWidth
                    });
                }).resize();
            </script>
        </div>
    </section>
    <script>
        $(window).on("load resize ", function() {
            var scrollWidth = $('.tbl-content').width() - $('.tbl-content table').width();
            $('.tbl-header').css({
                'padding-right': scrollWidth
            });
        }).resize();
    </script>
</body>

</html>