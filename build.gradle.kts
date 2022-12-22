plugins {
    kotlin("js") version "1.7.21"
}

group = "io.itch.roomunrecalled"
version = "1.0-SNAPSHOT"

repositories {
    mavenCentral()
}

dependencies {
    implementation(project(":PIXI-Kotlin"))
    implementation(npm("pixi.js", "6.5.3"))
    testImplementation(kotlin("test"))
}

kotlin {
    js {
        binaries.executable()
        browser {
            commonWebpackConfig {
                cssSupport.enabled = true
            }
        }
    }
}