from contextlib import asynccontextmanager
from datetime import datetime, timedelta
from typing import AsyncIterator, List

from fastapi import FastAPI, Form, Query, status
from fastapi.responses import RedirectResponse
from typing_extensions import TypedDict

from services.database import JSONDatabase


class Quote(TypedDict):
    name: str
    message: str
    time: str


database: JSONDatabase[list[Quote]] = JSONDatabase("data/database.json")


@asynccontextmanager
async def lifespan(app: FastAPI) -> AsyncIterator[None]:
    """Handle database management when running app."""
    if "quotes" not in database:
        print("Adding quotes entry to database")
        database["quotes"] = []

    yield

    database.close()


app = FastAPI(lifespan=lifespan)


@app.post("/quote")
def post_message(name: str = Form(), message: str = Form()) -> RedirectResponse:
    """
    Process a user submitting a new quote.
    You should not modify this function except for the return value.
    """
    now = datetime.now()
    quote = Quote(name=name, message=message, time=now.isoformat(timespec="seconds"))
    database["quotes"].append(quote)

    # You may modify the return value as needed to support other functionality
    return RedirectResponse("/", status.HTTP_303_SEE_OTHER)


# TODO: add another API route with a query parameter to retrieve quotes based on max age

@app.get("/quotes")
def get_quotes_max_age(date: str = Query((datetime.now() - timedelta(1)).strftime("%Y-%m-%d"))) -> List[Quote]:
    """
    Gets all quotes that are younger than a maximum age in seconds.
    """
    time = datetime.strptime(date, "%Y-%m-%d")
    quotes_to_return = [q for q in database["quotes"] if datetime.fromisoformat(q["time"]) >= time]
    
    return quotes_to_return
