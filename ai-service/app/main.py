from fastapi import FastAPI

app = FastAPI(title="Virtual Campus AI Service")


@app.get("/health")
def health() -> dict[str, str]:
    return {"status": "AI service running"}
