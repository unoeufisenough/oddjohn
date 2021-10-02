import React from 'react'
import '../style/pageTitle.css'

function PageTitle(pageTitleName) {

    return (
        <div className="pageTitle">
            <div className="pageTitle__arrowWrap">
                <button className="pageTitle__arrow"><span className="visually-hidden"></span></button>              
            </div>
            <h2 className="pageTitle__h">Home {pageTitleName.pathname}</h2>
        </div>
    )
}

export default PageTitle
