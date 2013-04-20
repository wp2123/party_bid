/**
 * Created with JetBrains RubyMine.
 * User: wangpu
 * Date: 13-4-20
 * Time: 上午10:14
 * To change this template use File | Settings | File Templates.
 */

function get_all_activities_names(id){

    if_create_activities_button_available();
    localStorage.setItem("if_signing_up",localStorage.getItem("if_signing_up") || 0);
    window.location.href = "#home";
    var string_all_activities_names = "";
    try{
        var array_of_all_activities = JSON.parse(localStorage.getItem("key_of_all_activities_names"));
        for(var i=array_of_all_activities.length-1;i>=0.;i--){
            var background_color ;
            var activities_object = JSON.parse(localStorage.getItem("one_activities_object" + (i+1)));
            if(activities_object.flag == 1){
                var background_color = 'data-theme="e"';
            }
            else{
                var background_color = "";
            }
            string_all_activities_names += '<li id=' + (i+1) + ' + ' + background_color + '><a onclick="judge_if_signing_up_or_not(' + (i+1) + ')">' + array_of_all_activities[i] + '</a></li>'
        }
    } catch (e){}
    add_activities_dynamically(id,string_all_activities_names)
}

function add_activities_dynamically(id,generated_string){

    $("#"+id).html(generated_string);
    try{
        $("#"+id).listview('refresh');
    }catch (e){}
}
