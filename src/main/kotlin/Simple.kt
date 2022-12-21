import browser.document

fun main() {
    val canvas = document.getElementById("display") ?: throw Exception("The 'display' canvas was not found")
}