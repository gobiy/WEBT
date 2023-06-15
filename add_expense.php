<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "transaktionsliste";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
die("Verbindung fehlgeschlagen: " . $conn->connect_error);
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
$einnahmen = $_POST['einnahmen'];
$category = $_POST['category'];
$amount = $_POST['amount'];
$description = $_POST['description'];

$errors = array();

if (empty($einnahmen)) {
    $einnahmen = 0;
}

if (empty($category)) {
    $errors[] = "Bitte wählen Sie eine Kategorie aus";
}

if (empty($amount)) {
    $errors[] = "Bitte geben Sie einen Betrag ein";
}

if (empty($description)) {
    $description = date("Y-m-d");
}

if (count($errors) > 0) {
    header('HTTP/1.1 400 Bad Request');
    header('Content-Type: application/json');
    echo json_encode($errors);
    exit();
}

$sql = "INSERT INTO transaktionen (einnahmen, Kategorie, Betrag, Beschreibung) VALUES ('$einnahmen', '$category', '$amount', '$description')";

if ($conn->query($sql) === TRUE) {
    echo "Datensatz erfolgreich erstellt";
} else {
    echo "Fehler beim Erstellen des Datensatzes: " . $conn->error;
}

header("Location: index.html");
exit();
}

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
$sql = "SELECT einnahmen, Kategorie, Betrag, Beschreibung FROM transaktionen";

$result = $conn->query($sql);
$posts = $result->fetch_all(MYSQLI_ASSOC);

echo json_encode($posts);

$conn->close();
}
?>
