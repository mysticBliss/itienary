from sqlalchemy import Column, Integer, String, Float, Enum, ForeignKey, DateTime
from sqlalchemy.orm import relationship
import enum
from datetime import datetime
from ..core.database import Base

class ItineraryStage(str, enum.Enum):
    NEW = "new"
    CUSTOMER_REVIEW = "customer_review"
    FINALIZED = "finalized"

class Itinerary(Base):
    __tablename__ = "itineraries"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)
    total_price = Column(Float)
    currency = Column(String)
    stage = Column(Enum(ItineraryStage), default=ItineraryStage.NEW)
    creator_id = Column(Integer, ForeignKey("users.id"))
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    # Relationships
    creator = relationship("User", back_populates="created_itineraries")
    tasks = relationship("Task", back_populates="itinerary")
    comments = relationship("Comment", back_populates="itinerary")
    destinations = relationship("Destination", back_populates="itinerary")