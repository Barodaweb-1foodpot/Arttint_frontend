import React from "react"
import { Link } from "react-router-dom"
import mainLogo from "../assets/img/main-logo.png"
import artAns from "../assets/img/art-answers.png"
import hyatt from "../assets/img/hyatt-logo.png"

export const Header = () => {
    return (
        <React.Fragment>

            <section class="header">
                <div class="container-fluid">
                    <div class="d-flex justify-content-between header-logo">
                        <div class="logo-left">
                            <Link to="/">
                                <img src={mainLogo} class="w-100" alt="" />
                           </Link>
                        </div>
                        <div class="logo-right">
                            <img src={artAns} class="w-100" alt="" />
                            <img src={hyatt} class="w-100" alt="" />
                        </div>
                    </div>
                </div>
            </section>

        </React.Fragment>
    )
}