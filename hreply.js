var hoverstart;
var duration;
var expanded = false;

function btn_action() {
    if(expanded != true) {
        hoverstart = new Date().getTime();
        set_text_under("wait a second, then move your mouse");
    }
}

function if_duration_go() {
    if(!expanded) {
        if((new Date().getTime() - hoverstart) >= 500) {
            make_textbox_big();
            set_text_under("click to post");
            expanded = true;
        } else {
            set_text_under("hover to reply");
        }
    }
}

function make_textbox_big() {
    document.getElementById("post-input").style.background="#333";
    document.getElementById("post-input").style.height="15em";
    document.getElementById("reply-button").href="#post";
    document.getElementById("reply-button").id="post-button";
    return false;
}

function set_text_under(msg) {
    document.getElementById("reply-text").innerHTML=msg;
}