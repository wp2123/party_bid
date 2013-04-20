

function create_activities(){

    localStorage.setItem("activities_number",localStorage.getItem("activities_number") || "1");
    window.location.href="#sign_up_page";
    $("#start_sign_up").text("开始");
    status_of_start_button_when_create_activities();
    var key_of_all_activities_names = JSON.parse(localStorage.getItem("key_of_all_activities_names")) || new Array();
    key_of_all_activities_names.push($("#activities_names").val());
    localStorage.setItem("key_of_all_activities_names",JSON.stringify(key_of_all_activities_names));
    localStorage.setItem("one_activities_object_" + localStorage.getItem("activities_number") + "_content",JSON.stringify(new Array()));
    localStorage.setItem("one_activities_object" + localStorage.getItem("activities_number"),'{"name":"' + $("#activities_names").val() + '","flag":' + 0 + ',"number":"' + localStorage.getItem("activities_number") + '","content":"' +
        localStorage.getItem("one_activities_object_" + localStorage.getItem("activities_number") + "_content") + '"}');
    localStorage.setItem("number_of_being_accessed_activities",localStorage.getItem("activities_number"));
    localStorage.setItem("activities_number",parseInt(localStorage.getItem("activities_number"))+1);
    $("#activities_names").val("");
    $("#create_activities").button("disable");
}
