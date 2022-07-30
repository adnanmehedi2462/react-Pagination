// pagination.js component

import React from 'react'

export const Pagination = ({postParpage,totalpost,paginate}) => {

 const pageNumber=[]
 for(let i=1;i<=Math.ceil(totalpost / postParpage);i++){
    pageNumber.push(i)
 }



  return (
    <div>
             <div className="pagination">
                            <ul className="pagination-list">
                                
                                {/* <li>
                                    <a href="#" className="page-number">
                                        <i className="fas fa-angle-left"></i>
                                    </a>
                                </li> */}
                                {pageNumber.map((number)=>(
                                     <li key={number} >
                                        <a href='#' id="bluebutton" onClick={()=>paginate(number)}><span  className="page-number current">{number}</span></a>
                                     </li>
                                ))}
                               
                                
                                {/* <li>
                                    <a href="#" className="page-number">
                                        <i className="fas fa-angle-right"></i>
                                    </a>
                                </li> */}
                            </ul>
                 </div>
    </div>
  )
}




// Home.js component



const indexOflastPost=currentPage*postParpage
const indexofFirstPOst=indexOflastPost-postParpage
const currentPost=allPost.slice(indexofFirstPOst,indexOflastPost)     

const paginate=(pageNumber)=>setCurrentPage(pageNumber);



// return 


<Pagination postParpage={postParpage} totalpost={allPost.length} paginate={paginate} />