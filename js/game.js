function sendmessage(sectionId){
    var iframe = document.getElementsByTagName('iframe')[0].contentWindow;

    iframe.postMessage(sectionId,'*');
}