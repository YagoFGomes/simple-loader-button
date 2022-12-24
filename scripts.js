const delay = ms => new Promise(res => setTimeout(res, ms));
    
function cria(link_a, download){
    tag_a = document.getElementById(link_a);
    tag_a.classList.add("disable-links");

    btn = document.getElementById(download);
    btn.classList.remove("btn-primary");
    btn.classList.add("btn-secondary", "ml-1" ,"buttonload" );
    btn.innerHTML = "<i class='fa fa-refresh fa-spin'></i>Loading"; 
}

function remover(link_a, download){
    tag_a = document.getElementById(link_a);
    tag_a.classList.remove("disable-links");

    btn = document.getElementById(download);
    btn.classList.add("btn-primary");
    btn.classList.remove("btn-secondary", "buttonload");
    btn.innerHTML = "Baixe";
}


const yourFunction = async (link_a, download) => {
    
    cria(link_a, download);
  
    await delay(10000);
    remover(link_a, download);
  };