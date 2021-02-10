import React from "react";

export function CardFooter() {
    return (
      <div className="uk-card-footer uk-border-rounded" id="card-footer">
        <a href="#writing-modal" uk-toggle>
          <h3 className="uk-card-title uk-heading-divider" id="card-h3">
            Writing.
          </h3>
        </a>
      </div>
    );
  }