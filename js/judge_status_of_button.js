/**
 * Created with JetBrains RubyMine.
 * User: wangpu
 * Date: 13-4-20
 * Time: 上午10:18
 * To change this template use File | Settings | File Templates.
 */

function if_create_button_available() {

    window.location.href = "#create_activities_page";
    $("#activities_names").keyup(function(){
        var input_activities_name = $("#activities_names").val();
        if(input_activities_name.trim()=="")
        {
            $("#create_activities").button("disable");
        }
        else
        {
            $("#create_activities").button("enable");
        }
    });
}

function status_of_start_button_when_create_activities(){

    try{
        if(localStorage.getItem("if_signing_up") == "0"){
            $("#start_sign_up_button").button("enable");
        }
        else{
            $("#sign_up_page").page();
            $("#start_sign_up_button").button("disable");
        }
    } catch (e) {}
}

function if_create_activities_button_available(){

    if(localStorage.getItem("if_signing_up") == "1"){
        $("#create_activities_of_home").page();
        $("#create_activities_of_home").button("disable");
    }
    else{
        $("#create_activities_of_home").button("enable");
    }
}

function judge_status_of_start_button(one_activities_object){

    if(localStorage.getItem("if_signing_up") == "1" && one_activities_object.flag == 1){
        $("#start_sign_up").text("结束");
    }
    else if(localStorage.getItem("if_signing_up") == "1" && one_activities_object.flag == 0){
        $("#start_sign_up").text("开始");
        try{
            $("#sign_up_page").page();
            $("#start_sign_up_button").button("disable");
        } catch (e){}
    }
    else if(localStorage.getItem("if_signing_up") == "0" && one_activities_object.flag == 0){
        $("#start_sign_up").text("开始");
    }
    else{
        $("#start_sign_up").text("结束");
        try{
            $("#sign_up_page").page();
            $("#start_sign_up_button").button("disable");
        } catch (e){}
    }
}
