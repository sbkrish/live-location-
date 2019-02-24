 <?php

extract($_POST);
if (isset($_POST['lat'])) {
    $connection   = new mysqli("localhost", "root", "", "google_map");
    if($connection->connect_error)

    {

      // die('Connect Error:'.$connection->connect_errorno.':'.$connection->connect_error);
      die('Database Connectivity error');

    } else {

    $insert_value = mysqli_query($connection, "INSERT INTO `coordinates`(`latitude`, `longitude`) VALUES('$lat', '$long')");   
    echo "success"; 
}
mysqli_close($connection);
}

?> 