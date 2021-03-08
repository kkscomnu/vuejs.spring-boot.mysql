package com.taskagile.domain.common.event;

import org.springframework.context.ApplicationEvent;

public abstract class DomainEvent extends ApplicationEvent {

  private static final long serialVersionUID = 1L;

  public DomainEvent(Object source) {
    super(source);
  }

  public long occuredAt() {
    return getTimestamp();
  }
}
