<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $einnahmen = $_POST['einnahmen'];
    $category = $_POST['category'];
    $amount = $_POST['amount'];
    $description = $_POST['description'];

    $result = $einnahmen - $amount;

    // Ein selbstdefiniertes Cookie setzen
    $cookieName = 'myCookie';
    $cookieValue = 'Cookie Value';
    setcookie($cookieName, $cookieValue, time() + (86400 * 30), '/'); // Gültig für 30 Tage und für alle Pfade

    // HTTP-Response generieren
    echo '<!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <title>Response</title>
    </head>
    <body>
        <h1>Response</h1>
        <p>Einnahmen: '.$einnahmen.'</p>
        <p>Kategorie: '.$category.'</p>
        <p>Betrag: '.$amount.'</p>
        <p>Beschreibung: '.$description.'</p>
        <p>Ergebnis: '.$result.'</p>
        <a href="BUDGETPLAN.HTML">Zurück zum HTML-Dokument</a>
    </body>
    </html>';

    exit; // Beenden Sie die Skriptausführung, um zusätzlichen HTML-Code zu vermeiden
}
?>
