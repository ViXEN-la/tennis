<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: GET, POST");
    header("Access-Control-Allow-Headers: Content-Type");

    $conn = new mysqli("localhost", "", "", "users");
    if(mysqli_connect_error()){
        echo mysqli_connect_error();
        exit();
    }
    else {
        $eData = file_get_contents("php://input");
        $dData = json_decode($eData, true);

        $user = $dData['username'];
        $email = $dData['email'];
        $password = $dData['password'];
    }

    if($user != "" and $email != "" and $password != "") {
        $sql = "INSERT INTO user(user, email, password) VALUES('$user', '$email', '$password')";
        $res = mysqli_query($conn, $sql);
        if($res) {
            $result = "You have registered successfully!";
        }
        else {
            $result = "";
        }

    }
    $else {
        $result = "";
    }

    $conn -> close();
    $response[] = array("result" => $result);
    echo json_encode($response);

?>