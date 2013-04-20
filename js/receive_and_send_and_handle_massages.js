/**
 * Created with JetBrains RubyMine.
 * User: wangpu
 * Date: 13-4-20
 * Time: 上午11:03
 * To change this template use File | Settings | File Templates.
 */


var native_accessor = {
    process_received_message: function (json_message) {
        process_user_message(json_message);

    },

    send_sms: function (phone, message) {
        native_access.send_sms({"receivers":[{"name":'name', "phone":phone}]}, {"message_content":message},
            function(){}, function(){},this);
    },

    receive_message: function (json_message) {
        if (typeof this.process_received_message === 'function') {
            this.process_received_message(json_message);
        }
    }

}
function notify_message_received(message_json) {
    native_accessor.receive_message(message_json);
}

function process_user_message(json_message){

    var json_message = json_message;
    localStorage.setItem("number_of_messages",localStorage.getItem("number_of_messages") || "0");
    var number_of_messages = parseInt(localStorage.getItem("number_of_messages"));
    var string_of_bm_location = json_message.messages[number_of_messages].message.toLocaleLowerCase().indexOf("bm");
    if(string_of_bm_location>=0){
        if(localStorage.getItem("if_signing_up") == "0"){
            native_accessor.send_sms(json_message.messages[number_of_messages].phone,"活动尚未开始，请稍后");
        }
        else if(localStorage.getItem("if_signing_up") == "1"){
            var signing_up_activities_content = JSON.parse(localStorage.getItem("one_activities_object_" + localStorage.getItem("number_of_being_accessed_activities") + "_content"));
            for(var i=0;i<signing_up_activities_content.length+1;i++){
                if((signing_up_activities_content.length == 0) || (json_message.messages[number_of_messages].message.substring(string_of_bm_length + 2).trim() != signing_up_activities_content[i].name) || ((json_message.messages[number_of_messages].message.substring(string_of_bm_location + 2).trim() == signing_up_activities_content[i].name)&&(json_message.messages[number_of_messages].phone != signing_up_activities_content[i].phone))){
                    var one_of_content_of_signing_up_activities = {"name":json_message.messages[number_of_messages].message.substring(string_of_bm_location + 2).trim(),"phone":json_message.messages[number_of_messages].phone}
                    signing_up_activities_content.push(one_of_content_of_signing_up_activities);
                    localStorage.setItem("one_activities_object_" + localStorage.getItem("activities_number") + "_content",JSON.stringify(signing_up_activities_content));
                    native_accessor.send_sms(json_message.messages[number_of_messages].phone,"恭喜！报名成功");
                }
                else{
                    native_accessor.send_sms(json_message.messages[number_of_messages].phone,"您已经报名成功，请勿重复报名！");
                }
            }
        }
        else if(localStorage.getItem("if_signing_up") == "2"){
                native_accessor.send_sms(json_message.messages[number_of_messages].phone,"Sorry，活动报名已结束");
        }
            localStorage.setItem("number_of_messages",parseInt(localStorage.getItem("number_of_messages")) + 1);
    }
}