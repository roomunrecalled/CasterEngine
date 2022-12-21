package display

import kotlinx.js.jso
import org.w3c.dom.HTMLCanvasElement
import pixi.typings.core.AbstractRenderer
import pixi.typings.core.IRendererOptionsAuto
import pixi.typings.core.autoDetectRender
import pixi.typings.display.Container
import pixi.typings.display.DisplayObject
import pixi.typings.settings.IRenderOptions
import pixi.typings.ticker.Ticker
import pixi.typings.ticker.TickerCallback

class CasterDisplay (rootElement: HTMLCanvasElement){
    val displayTicker = Ticker.shared
    val mainRenderer: AbstractRenderer
    val rootStage = Container<DisplayObject>()

    init {
        displayTicker.autoStart = false
        displayTicker.stop()

        mainRenderer = autoDetectRender(
            Any().unsafeCast<IRendererOptionsAuto>().apply {
                view = rootElement
                backgroundColor = 0xFFAA00
            })

        var elapsed = 0.0
        /*
        val tickerFun : TickerCallback<CasterDisplay> = {
            this, delta: Double ->
            elapsed += delta
            mainRenderer.render(rootStage)
        }
        displayTicker.add({
            delta: Double -> elapsed += delta}
        )
         */
    }
}