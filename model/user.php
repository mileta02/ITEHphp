<?php

class User {
public $id;
public $username;
public $password;

public function __construct($id, $username, $password){
  $this->id=$id;
  $this->username=$username;
  $this->password=$password;
}
 
public static function loginUser($user, mysqli $conn){

$query = "SELECT * FROM user WHERE username = '$user->username' AND password = '$user->password'";
echo $query;
//Konekcija sa bazom
return $conn->query($query);
}


}


?>