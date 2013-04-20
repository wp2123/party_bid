/**
 * Created with JetBrains RubyMine.
 * User: wangpu
 * Date: 13-4-20
 * Time: 上午10:51
 * To change this template use File | Settings | File Templates.
 */

function start_sign_up(){

    if(($("#start_sign_up").text())=="开始"){
        localStorage.setItem("if_signing_up",1);
        activities_object_flag_add_one();
        $("#start_sign_up").text("结束");
    }
    else{
        confirm_to_exit();
    }
}

function confirm_to_exit(){

    var pop = confirm("确定要结束本活动报名吗？");
    if(pop == true){
        $("#start_sign_up_button").button("disable");
        activities_object_flag_add_one();
        localStorage.setItem("if_signing_up",0);
    }
}

function activities_object_flag_add_one(){

    var being_accessed_activities_object = JSON.parse(localStorage.getItem("one_activities_object"+localStorage.getItem("number_of_being_accessed_activities")));
    being_accessed_activities_object.flag++;
    localStorage.setItem("one_activities_object"+localStorage.getItem("number_of_being_accessed_activities"),JSON.stringify(being_accessed_activities_object));
}

function judge_if_signing_up_or_not(id){

    window.location.href = "#sign_up_page";
    try{
        $("#start_sign_up_button").button("enable");
    } catch (e){}
    var be_clicked_activity_name = $("#"+id).text().trim();
    for(var i=1;i<parseInt(localStorage.getItem("activities_number"));i++){
        var one_activities_object = JSON.parse(localStorage.getItem("one_activities_object"+i));
        if(be_clicked_activity_name == one_activities_object.name){
            localStorage.setItem("number_of_being_accessed_activities",i);
            judge_status_of_start_button(one_activities_object);
        }
    }
}
