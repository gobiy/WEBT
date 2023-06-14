<?php
// Stelle eine Verbindung zur Datenbank her (ersetze die Platzhalter mit den tatsächlichen Daten)
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "transaktionsliste";

$conn = new mysqli($servername, $username, $password, $dbname);

// Überprüfe, ob die Verbindung erfolgreich hergestellt wurde
if ($conn->connect_error) {
    die("Verbindung fehlgeschlagen: " . $conn->connect_error);
}

// Überprüfe, ob das Formular abgesendet wurde
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Hol dir die Werte aus dem Formular
    $einnahmen = $_POST['einnahmen'];
    $category = $_POST['category'];
    $amount = $_POST['amount'];
    $description = $_POST['description'];

    // Erstelle den SQL-Befehl zum Einfügen der Daten in die Tabelle
    $sql = "INSERT INTO transaktionen (einnahmen, Kategorie, Betrag, Beschreibung) VALUES ('$einnahmen', '$category', '$amount', '$description')";

    // Führe den SQL-Befehl aus und überprüfe das Ergebnis
    if ($conn->query($sql) === TRUE) {
        echo "Datensatz erfolgreich erstellt";
    } else {
        echo "Fehler beim Erstellen des Datensatzes: " . $conn->error;
    }
}

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
$sql = "select einnahmen, Kategorie, Betrag, Beschreibung from transaktionen";

$result = $conn->query($sql);
$posts = $result->fetch_all(MYSQLI_ASSOC);


echo json_encode($posts);

// Schließe die Verbindung zur Datenbank
$conn->close();
}
?>
