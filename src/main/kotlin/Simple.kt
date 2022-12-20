import pixi.externals.Color
import pixi.externals.extensions.addToBody
import pixi.utils.application

fun main() {
    val application = application {
        //view = container as HTMLCanvasElement
        backgroundAlpha = 1.0
        backgroundColor = Color(120, 200, 230)
        width = 640
        height = 320
    }
    application.addToBody()

    application.run {}
}