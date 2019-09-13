<?php
$string = "Foundry Spatial";

// Traverse the string
for ($i = 0; $i < strlen($string); $i++) {
	if ($string[$i] == ' ') {
		echo "\n\n";
	}
	else {
		$alphabetIndex = ord(strtolower($string[$i])) - 96; //97 is the decimal value of the letter a in ASCII

		for ($j = $alphabetIndex; $j > 0; $j--) {
		echo $string[$i];
		}
		echo "\n";
	}
}
