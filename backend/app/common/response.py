
def ok(data):
    return {"success": True, "data": data}

def fail(msg):
    return {"success": False, "error": msg}
