var e=document.querySelector("body"),t=document.querySelector(".logo"),n=new Promise(function(e,n){t.addEventListener("click",function(){return e()})}),r=new Promise(function(e,t){setTimeout(function(){return t()},3e3)});n.then(function(){var t=document.createElement("div");t.setAttribute("class","message"),t.textContent="Promise was resolved!",e.append(t)}),r.catch(function(){var t=document.createElement("div");t.setAttribute("class","message"),t.classList.add("error-message"),t.textContent="Promise was rejected!",e.append(t)});
//# sourceMappingURL=index.882d8725.js.map
