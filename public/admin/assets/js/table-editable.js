(()=>{"use strict";$((function(e){var t={};$(".table-size tr").editable({keyboard:!0,button:!0,buttonSelector:".size-icn",dropdowns:{gender:["Male","Female"]},maintainWidth:!0,edit:function(e){$(".size-icn i",this).removeClass("fe-pen").addClass("fe-save").attr("title","Save")},save:function(e){$(".size-icn i",this).removeClass("fe-save").addClass("fe-pen").attr("title","Edit"),this in t&&(t[this].destroy(),delete t[this])},cancel:function(e){$(".size-icn i",this).removeClass("fe-save").addClass("fe-pen").attr("title","Edit"),this in t&&(t[this].destroy(),delete t[this])}}),$("#editable-responsive-table").DataTable({responsive:!0,language:{searchPlaceholder:"Search...",sSearch:""}}),(a=$("#editable-file-datatable").DataTable({buttons:["copy","excel","pdf","colvis"],responsive:!0,language:{searchPlaceholder:"Search...",sSearch:""}})).buttons().container().appendTo("#editable-file-datatable_wrapper .col-md-6:eq(0)");var a=$("#delete-datatable").DataTable({language:{searchPlaceholder:"Search...",sSearch:""}});$("#delete-datatable tbody").on("click","tr",(function(){$(this).hasClass("selected")?$(this).removeClass("selected"):(a.$("tr.selected").removeClass("selected"),$(this).addClass("selected"))})),$("#button").on("click",(function(){a.row(".selected").remove().draw(!1)})),$(".select2").select2({minimumResultsForSearch:1/0})}))})();
