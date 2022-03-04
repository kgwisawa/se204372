<table border=1>
    <tr>
        <td>ID</td>
        <td>Name</td>
        <td>Company name</td>
        <td>Position</td>
        <td>Start Date</td>
        <td>End Date</td>
        <td>File</td>
        <td>Status</td>
        <td>Update status</td>
    </tr>

    <?php 
    echo "ควย";
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


    echo "</table>";
    ?>