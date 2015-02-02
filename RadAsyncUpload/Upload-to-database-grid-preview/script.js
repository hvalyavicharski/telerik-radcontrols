﻿(function () {

    window.onClientFileUploaded = function (radAsyncUpload, args) {
        var row = args.get_row(),
            inputName = radAsyncUpload.getAdditionalFieldID("TextBox"),
            inputType = "text",
            inputID = inputName,
            input = createInput(inputType, inputID, inputName),
            label = createLabel(inputID),
            br = document.createElement("br");

        row.appendChild(br);
        row.appendChild(label);
        row.appendChild(input);
    }

    function createInput(inputType, inputID, inputName) {
        var input = document.createElement("input");

        input.setAttribute("type", inputType);
        input.setAttribute("id", inputID);
        input.setAttribute("name", inputName);

        return input;
    }

    function createLabel(forArrt) {
        var label = document.createElement("label");

        label.setAttribute("for", forArrt);
        label.innerHTML = "File info: ";

        return label;
    }
})();