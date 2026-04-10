<?php
if (isset($_GET["msg"])) {
    $msg = htmlspecialchars($_GET["msg"]);
    echo "Reply: " . $msg . " (received at " . date("H:i:s") . ")";
} else {
    echo "No message received.";
}
