plugins {
    kotlin("js") version "1.8.0-RC"
}

group = "io.itch.roomunrecalled"
version = "1.0-SNAPSHOT"

repositories {
    mavenCentral()
}

dependencies {
    implementation("io.github.ayfri:PIXI-Kotlin-pixi:0.5.2")
    implementation(npm("pixi.js", "6.5.3"))
    testImplementation(kotlin("test"))
}

kotlin {
    js {
        binaries.executable()
        browser {
            commonWebpackConfig {
                cssSupport {
                    enabled.set(true)
                }
            }
        }
    }
}