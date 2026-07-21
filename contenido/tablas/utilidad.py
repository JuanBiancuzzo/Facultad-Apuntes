import datetime as dt

def timestamp(tiempo: dt.date | dt.datetime) -> int:
    if type(tiempo) is dt.date:
        tiempo = dt.datetime.combine(tiempo, dt.datetime.min.time(), tzinfo = dt.timezone.utc)

    if type(tiempo) is dt.datetime:
        return int(tiempo.timestamp())

    return -1
