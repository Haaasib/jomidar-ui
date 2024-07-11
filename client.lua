local QBCore = exports['qb-core']:GetCoreObject()

function Show(title, content)
    SendNUIMessage({
        action = "open",
        title = title,
        content = content
    })
end

function Close()
    print("[J0M1D4R] Closing NUI")
    SendNUIMessage({
        action = "close",
    })
end

exports("Show", Show)
exports("Close", Close)


RegisterCommand('open', function(source, args, rawCommand)
    if #args < 2 then
        Show(args[1])
        return
    end

    print(args[1])
    print("[J0M1D4R] Opening UI with title: " .. args[1] .. ", content: " .. args[2])

    -- Assuming Show is a function defined elsewhere in your script
    Show(args[1], args[2])
end)


RegisterCommand('close', function(source, args, RawCommand)
    print("[J0M1D4R] Closing NUI")
    Close()
end)
